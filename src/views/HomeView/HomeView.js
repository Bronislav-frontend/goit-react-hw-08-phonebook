import s from './HomeView.module.css'

export default function HomeView() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>
        Never lose people you <span className={s.word}>care</span> for
      </h1>
    </div>
  );
}