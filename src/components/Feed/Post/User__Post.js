import React from 'react';

import Button from '../../Button/User__Btn';
import './Post.css';

const post = props => (
  <article className="post">
<Button mode="flat" link={props.id}>
    <header className="post__header">
      <h3 className="post__meta">
        Written by {props.author} on {props.date}
      </h3>
      <h1 className="post__title">{props.title}</h1>
    </header>
    {/* <div className="post__image">
      <Image imageUrl={props.image} contain />
    </div> */}
    <div className="post__content">{props.content.slice(0, 200)}</div>
    
</Button>
  </article>
);
export default post;
