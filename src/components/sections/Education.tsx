export default function Education() {
  return (
    <div className="mt-16">
      <h2 className="mb-6 text-2xl font-bold">Education</h2>
      <div className="relative border-l border-gray-200 pl-8 dark:border-gray-800">
        <div className="bg-primary absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full text-white">
          <span className="h-3 w-3 rounded-full bg-white" />
        </div>
        <time className="text-muted-foreground mb-2 block text-sm font-medium">2017 - 2021</time>
        <h3 className="text-xl font-semibold">Bachelor of Applied Informatics</h3>
        <p className="text-muted-foreground">Prague University of Economics and Business</p>
      </div>
    </div>
  );
}
