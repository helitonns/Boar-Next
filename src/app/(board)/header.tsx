"use client";

import { Input } from "@/components/input";
import { authClient } from "@/lib/auth-client";
import { Loader2Icon, LogInIcon, SearchIcon } from "lucide-react";
import { debounce, parseAsString, useQueryState } from "nuqs";
import { ChangeEvent } from "react";

export function Header() {
  const { data: session, isPending } = authClient.useSession();

  const [search, setSearch] = useQueryState("q", parseAsString.withDefault(""));

  function handleSearchUpdate(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value, {
      limitUrlUpdates: event.target.value !== "" ? debounce(350) : undefined,
    });
  }

  async function handleSignIn() {
    authClient.signIn.social({ provider: "github", callbackURL: "/" });
  }

  async function handleSignOut() {
    await authClient.signOut();
  }

  return (
    <div className="max-w-225 mx-auto w-full flex items-center justify-between">
      <div className="space-1">
        <h1 className="font-semibold text-xl">Product Roadmap</h1>
        <p className="text-sm text-navy-100">Follow the development progress of our entire paltaform.</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <SearchIcon className="absolute size-4 text-navy-200 left-2.5 top-1/2 -translate-1/2 ml-2 pointer-events-none" />
          <Input
            type="text"
            placeholder="Search for features..."
            className="w-67.5 pl-8"
            value={search}
            onChange={handleSearchUpdate}
          />
        </div>

        {isPending ? (
          <div className="size-8 rounded-full bg-navy-700 border border-navy-500 flex items-center justify-center">
            <Loader2Icon className="size-3.5 text-navy-200 animate-spin"/>
          </div>
        ) : session?.user ? (
            <button
              type="button"
              className="size-8 rounded-full overflow-hidden cursor-pointer"
              onClick={handleSignOut}
            >
              <img src={session.user.image ?? ""} alt={session.user.name} className="size-8 rounded-full"/>
            </button>
        ) : (
          <button
            type="button"
            className="size-8 rounded-full bg-navy-700 border border-navy-500 flex items-center justify-center
            hover:bg-navy-600 transition-colors duration-150 cursor-pointer"
            onClick={handleSignIn}
          >
            <LogInIcon className="size-3.5 text-navy-200" />
          </button>
        )
        }

      </div>
    </div>
  );
}