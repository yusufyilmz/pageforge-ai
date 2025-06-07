"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { createClient } from "@pageforge/lib/supabase/client";
import { Button, Column, Heading, Input, Text } from "@pageforge/once-ui/components";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const router = useRouter();
  const supabase = createClient();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) {
          throw error;
        }
        setError("Check your email for the confirmation link!");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) {
          throw error;
        }
        router.push("/");
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    if (error) {
      setError(error.message);
    }
  };

  return (
    <Column fill center padding="l">
      <Column
        maxWidth="s"
        gap="l"
        align="center"
        background="surface"
        padding="xl"
        radius="l"
        border="neutral-weak"
      >
        <Heading variant="heading-strong-l" onBackground="neutral-strong" align="center">
          {isSignUp ? "Sign Up" : "Sign In"}
        </Heading>

        {error && (
          <Text variant="body-default-s" onBackground="danger-strong" align="center">
            {error}
          </Text>
        )}

        <form onSubmit={handleAuth} style={{ width: "100%" }}>
          <Column gap="m">
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Button type="submit" variant="primary" size="m" loading={isLoading} fillWidth>
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>
          </Column>
        </form>

        <Button onClick={handleGoogleAuth} variant="secondary" size="m" fillWidth>
          Continue with Google
        </Button>

        <Text variant="body-default-s" onBackground="neutral-weak" align="center">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <Button variant="tertiary" size="s" onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Sign In" : "Sign Up"}
          </Button>
        </Text>
      </Column>
    </Column>
  );
}
