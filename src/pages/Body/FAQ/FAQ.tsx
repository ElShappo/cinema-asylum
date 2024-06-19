const FAQ = () => {
  return (
    <main className="text-lg px-64 py-8">
      <div className="flex flex-col gap-5">
        <p className="bg-slate-800 p-4 rounded-xl">
          <h2 className="pb-4 text-2xl font-extrabold">Стек технологий</h2>
          Данное приложение написано на <b>React 18</b> на языке{" "}
          <b>TypeScript</b> с использованием стейт-менеджера <b>MobX</b>,
          фреймворка для стилей <b>TailwindCSS</b>, а также библиотеки{" "}
          <b>Material UI</b>. Пагинация реализована с помощью{" "}
          <b>React Router V6</b>.
        </p>
        <p className="bg-slate-800 p-4 rounded-xl">
          <h2 className="pb-4 text-2xl font-extrabold">Общая информация</h2>
          Приложение дает возможность пользователю искать кинокартины согласно
          выставленным критериям поиска. Картины можно искать по различным
          фильтрам:
          <ul className="py-4">
            <li>По жанру;</li>
            <li>По году;</li>
            <li>По рейтингу.</li>
          </ul>
          Пользователь также может получить подробную информацию о картине при
          клике на ее карточку.
          <p className="pt-2">
            Возможные ошибки со стороны API обрабатываются - при неудачном
            запросе пользователь увидит на сайте соответствующее предупреждение.
          </p>
        </p>
        <p className="bg-slate-800 p-4 rounded-xl">
          <h2 className="pb-4 text-2xl font-extrabold">
            Особенности реализации
          </h2>
          <ul>
            <li>
              Все фильтры, которые выставляет пользователь, сохраняются в
              поисковой строке, поэтому страницами с результатами фильтрации
              можно легко обмениваться;
            </li>
            <li>
              Адаптивный дизайн: вы можете с удобством пользоваться данным
              веб-сайтом на устройствах с различными размерами экрана.
            </li>
          </ul>
        </p>
      </div>
    </main>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
