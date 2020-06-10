import React from 'react';

const Dropdown = ({ data }) => {
  const { title_ko, title_en, sub_menuArr } = data;
  return (
    <div className="dropdown">
      <div className="dropdown__row">
        <div className="dropdown__column">
          <span className="dropdown__title-en">{title_en}</span>
          <div className="line"></div>
          <span className="dropdown__title-ko">{title_ko}</span>
        </div>
        <div className="dropdown__column">
          {sub_menuArr.length < 4 ? (
            <div className="dropdown__subColumn">
              <ul className="dropdown__list">
                {sub_menuArr.map((menu, index) => (
                  <li className="dropdown__item" key={index}>
                    <a href={menu.link} className="dropdown__link">
                      {menu.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <>
              <div className="dropdown__subColumn">
                <ul className="dropdown__list">
                  {sub_menuArr.slice(0, 3).map((menu, index) => (
                    <li className="dropdown__item" key={index}>
                      <a href={menu.link} className="dropdown__link">
                        {menu.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="dropdown__subColumn">
                <ul className="dropdown__list">
                  {sub_menuArr.slice(3).map((menu, index) => (
                    <li className="dropdown__item" key={index}>
                      <a href={menu.link} className="dropdown__link">
                        {menu.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
        <div className="dropdown__column" />
      </div>
    </div>
  );
};

export default Dropdown;
