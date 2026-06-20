
export default function Header({header,paragraph, className=""}) {
  return (
    <div className={`text-center py-10 mx-auto px-6 md:w-3/4 md:px-0 ${className}`}>
        <h1 className="font-bold text-4xl mb-3">{header}</h1>
        <p className="text-gray-700">{paragraph}</p>
    </div>
  );
}
