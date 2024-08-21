import React from "react";
import { Skeleton } from "./ui/skeleton";

const Loading = ({ isLargeRow }) => {
  return (
    <div className="flex">
      <Skeleton
        className={`${
          isLargeRow ? "w-[175px] h-[250px]" : "h-[100px] w-[185px"
        }  mr-2 `}
      />
      <Skeleton
        className={`${
          isLargeRow ? "w-[175px] h-[250px]" : "h-[100px] w-[185px"
        }  mr-2 `}
      />
      <Skeleton
        className={`${
          isLargeRow ? "w-[175px] h-[250px]" : "h-[100px] w-[185px"
        }  mr-2 `}
      />
      <Skeleton
        className={`${
          isLargeRow ? "w-[175px] h-[250px]" : "h-[100px] w-[185px"
        }  mr-2 `}
      />
      <Skeleton
        className={`${
          isLargeRow ? "w-[175px] h-[250px]" : "h-[100px] w-[185px"
        }  mr-2 `}
      />
      <Skeleton
        className={`${
          isLargeRow ? "w-[175px] h-[250px]" : "h-[100px] w-[185px"
        }  mr-2 `}
      />
      <Skeleton
        className={`${
          isLargeRow ? "w-[175px] h-[250px]" : "h-[100px] w-[185px"
        }  mr-2 `}
      />
      <Skeleton
        className={`${
          isLargeRow ? "w-[175px] h-[250px]" : "h-[100px] w-[185px"
        }  mr-2 `}
      />
    </div>
  );
};

export default Loading;
