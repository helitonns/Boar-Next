import { SearchInput } from "@/app/(board)/header/search-input";
import { UserButton } from "@/components/header/user-button";
import { Suspense } from "react";

export function Header() {
  
  return (
    <div className="max-w-225 mx-auto w-full flex items-center justify-between">
      <div className="space-1">
        <h1 className="font-semibold text-xl">Product Roadmap</h1>
        <p className="text-sm text-navy-100">Follow the development progress of our entire paltaform.</p>
      </div>

      <div className="flex items-center gap-4">
        <Suspense>
          <SearchInput />        
        </Suspense>
        <UserButton />
      </div>
    </div>
  );
}