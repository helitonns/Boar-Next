import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

//---------------- CommentRoot --------------------------
interface CommentRootProps extends ComponentProps<"div"> {}

function CommentRoot({className, ...props}: CommentRootProps) {
  return (
    <div className={twMerge("flex items-start gap-2", className)}  {...props} />
  );
}

//---------------- CommentAvatar --------------------------
interface CommentAvatarProps extends ComponentProps<"img"> { }

function CommentAvatar({className, ...props}: CommentAvatarProps) {
  return (
    <img className={twMerge("size-8 rounded-full", className)} alt="" {...props}/>
  );
}

//---------------- CommentContent --------------------------
interface CommentContentProps extends ComponentProps<"div"> { }

function CommentContent({className, ...props}: CommentContentProps) {
  return (
    <span className={twMerge("flex-1 px-3 py-2.5 rounded-lg bg-navy-700 border-[0.5px] border-navy-600 flex flex-col gap-1", className)} {...props}/>
  );
}

//---------------- CommentHeader --------------------------
interface CommentHeaderProps extends ComponentProps<"div"> { }

function CommentHeader({className, ...props}: CommentHeaderProps) {
  return (
    <div className={twMerge("flex items-baseline gap-1", className)} {...props} />
  );
}

//---------------- CommentAuthor --------------------------
interface CommentAuthorProps extends ComponentProps<"span"> { }

function CommentAuthor({ className, ...props }: CommentAuthorProps) {
  return (
    <span className={twMerge("text-sm font-medium", className)} {...props} />
  );
}

//---------------- CommentTime --------------------------
interface CommentTimeProps extends ComponentProps<"span"> { }

function CommentTime({ className, ...props }: CommentTimeProps) {
  return (
    <span className={twMerge("text-xs text-navy-200", className)} {...props} />
  );
}

//---------------- CommentText --------------------------
interface CommentTextProps extends ComponentProps<"p"> { }

function CommentText({ className, ...props }: CommentTextProps) {
  return (
    <p className={twMerge("text-sm leading-relaxed text-navy-100", className)} {...props} />
  );
}

//--------------------------------------------------------------
export const Comment = {
  Root: CommentRoot,
  Header: CommentHeader,
  Avatar: CommentAvatar,
  Content: CommentContent,
  Time: CommentTime,
  Author: CommentAuthor,
  Text: CommentText,
};