import logoImg from "../assets/quiz-logo.png";
export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="Quiz" />
      <h1>LodiQuiz</h1>
    </header>
  );
}
