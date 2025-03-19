import Link from "next/link";

interface LanguageSwitcherProps {
  currentPath: string;
}

export default function LanguageSwitcher({
  currentPath,
}: LanguageSwitcherProps) {
  if (!currentPath) return null; // ✅ currentPath가 없으면 아무것도 렌더링하지 않음.

  // 현재 언어가 한국어인지 확인
  const isKorean = currentPath.startsWith("/ko");

  // ✅ 현재 경로에서 "/ko/" → "/en/" 또는 "/en/" → "/ko/"로 변경
  const newPath = isKorean
    ? currentPath.replace(/^\/ko/, "/en") // ✅ 한국어 → 영어 ("/ko/about" → "/en/about")
    : currentPath.replace(/^\/en/, "/ko"); // ✅ 영어 → 한국어 ("/en/about" → "/ko/about")

  return (
    <nav>
      <button className="px-2 py-0.5 border border-orange-500 rounded-full text-orange-500 transition hover:font-bold">
        <Link href={newPath}>{isKorean ? "English" : "한국어"}</Link>
      </button>
    </nav>
  );
}

{
  /* <button className="px-2 py-0.5 border border-orange-500 rounded-full text-orange-500 transition hover:font-bold">
<Link href={newPath}>{isKorean ? "English" : "한국어"}</Link>
</button> */
}
