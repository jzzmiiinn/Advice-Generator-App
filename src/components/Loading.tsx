export const Loading = () => {
  return (
    <div className="bg-[hsl(217,19%,24%)] flex flex-col justify-center items-center gap-7 w-[400px] rounded-xl p-6 pb-12">
      <p className="text-white font-bold">Loading...</p>
      <picture>
        <source
          media="(max-width: 767px)"
          srcSet="/pattern-divider-mobile.svg"
        />

        <img
          src="/pattern-divider-desktop.svg"
          alt="divider"
          className="w-full"
        />
      </picture>
    </div>
  );
};
