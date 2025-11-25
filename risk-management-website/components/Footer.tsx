export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-secondary-400">
          &copy; {currentYear} Dromos. Independent Risk Management Professional.
        </p>
      </div>
    </footer>
  );
}
