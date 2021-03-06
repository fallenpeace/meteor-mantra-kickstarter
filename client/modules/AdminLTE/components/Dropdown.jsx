import React from 'react';
import classNames from 'classnames';

const Mycomponent = ({links = [], name = 'Empty name'}) => (
  <li className="dropdown">
    <a href="#" className="dropdown-toggle" data-toggle="dropdown">{name} <span className="caret"></span></a>
    <ul className="dropdown-menu" role="menu">

    {
        links.map((link) => {
          link.classes = link.classes ? link.classes : {};
          link.url = link.url ? link.url : '';
          link.name = link.name ? link.name : '';

          let classes = classNames(link.classes);

        if (link.url)
          return <li ><a href={link.url}>{link.name}</a></li>;
        else
          return <li >{link.name}</li>;
        })
    }

    </ul>
  </li>
);

export default Mycomponent ;
