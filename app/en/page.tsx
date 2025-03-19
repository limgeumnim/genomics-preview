import LanguageSwitcher from "../../components/LanguageSwitcher";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <h1 className="text-4xl font-bold text-blue-600">English</h1>
      <p className="text-xl font-normal text-blue-400">LanguageSwitcher Test</p>
      <LanguageSwitcher currentPath="/en" />
    </main>
  );
}
