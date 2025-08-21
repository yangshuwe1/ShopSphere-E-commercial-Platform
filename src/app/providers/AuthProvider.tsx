'use client';

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

type AuthUser = { email: string; role: 'customer' | 'seller' | 'admin' } | null;

type AuthContextValue = {
  user: AuthUser;
  loading: boolean;
  refresh: () => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue>({
  user: null,
  loading: true,
  refresh: async () => {},
  signOut: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser>(null);
  const [loading, setLoading] = useState(true);

  const fetchMe = useCallback(async () => {
    try {
      const res = await fetch('http://localhost:4000/api/auth/me', { credentials: 'include' });
      if (!res.ok) {
        setUser(null);
      } else {
        const data = await res.json();
        setUser({ email: data.email, role: data.role });
      }
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchMe(); }, [fetchMe]);

  const refresh = useCallback(async () => {
    setLoading(true);
    await fetchMe();
  }, [fetchMe]);

  const signOut = useCallback(async () => {
    try {
      await fetch('http://localhost:4000/api/auth/logout', { method: 'POST', credentials: 'include' });
    } finally {
      setUser(null);
      // force a soft refresh for components relying on user
      if (typeof window !== 'undefined') window.location.href = '/';
    }
  }, []);

  const value = useMemo(() => ({ user, loading, refresh, signOut }), [user, loading, refresh, signOut]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};


