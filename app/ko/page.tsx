import LanguageSwitcher from "../../components/LanguageSwitcher";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <h1 className="text-4xl font-bold text-blue-600">Korean</h1>
      <p className="text-xl font-normal text-blue-400">
        언어 전환 버튼 테스트중
      </p>
      <LanguageSwitcher currentPath="/ko" />
    </main>
  );
}
