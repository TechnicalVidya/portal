export const Skeleton = ({ className }) => (
  <div className={className}>
    <span className="inline-flex w-full animate-pulse select-none rounded-md bg-muted-foreground/15 leading-none"></span>
    <br />
  </div>
);

const SVGSkeleton = ({ className }) => (
  <svg
    className={className + " animate-pulse rounded bg-muted-foreground/15"}
  />
);

const CardLoading = () => (
  <>
    <div className="border shadow-sm pt-6 overflow-hidden">
      <div className="p-6 pt-0">
        <div>
          <div className="relative shadow-lg overflow-hidden">
            <div className="absolute"></div>
            <SVGSkeleton className="object-cover aspect-square transition-transform duration-1000 cursor-pointer w-[500px] h-[300px]" />
          </div>
          <h3 className="leading-none tracking-tight mt-4">
            <div className="w-full flex justify-between items-center">
              <div>
                <Skeleton className="w-[48px] max-w-full" />
              </div>
              <div>
                <a>
                  <div className="inline-flex items-center justify-center transition-colors h-10 w-10">
                    <SVGSkeleton className="w-5 h-5" />
                  </div>
                </a>
                <a>
                  <div className="inline-flex items-center justify-center transition-colors h-10 w-10">
                    <SVGSkeleton className="w-[23px] h-[23px]" />
                  </div>
                </a>
              </div>
            </div>
          </h3>
          <div>
            <Skeleton className="w-[136px] bg-muted-foreground/15 animate-pulse transform transition-all duration-1000 rounded-lg max-w-full" />
          </div>
          <div className="mt-2">
            <Skeleton className="w-[176px] bg-muted-foreground/15 animate-pulse transform transition-all duration-1000 rounded-lg max-w-full" />
          </div>
        </div>
      </div>
      <div className="items-center p-6 pt-0 flex justify-between">
        <div className="flex flex-row items-center justify-center"></div>
        <a>
          <div className="inline-flex items-center justify-center bg-muted-foreground/15 animate-pulse transform duration-1000 rounded-lg transition-colors h-10 px-4 py-2">
            <Skeleton className="w-[32px] max-w-full" />
          </div>
        </a>
      </div>
    </div>
  </>
);

export default CardLoading;
