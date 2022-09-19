# UBC-LaunchPad-2022

## FRONT-END DEVELOPMENT
Ideally, when you build web page designs, different size screen models should always be considered before fully implementing the interface. By making the design extremely specific to a specification like 1920x1080 pixels restricts it from looking correct when the window sizes changes. Instead of building another design that fits another exact specific 750x1334 pixels, it is better to refactor the design into being responsive.

With responsive design, whichever device a user is viewing the website on becomes irrelevant. They know is that the site works, no matter what device is viewing it.

By using media queries, which are a key part of responsive web design, it allows for different layouts to occur depending on the size of the viewport. We can also use this to detect other things about the environment the site is running on, for example whether the user is using a touchscreen rather than a mouse.

For our case, we have a webpage we are trying to convert to fit a mobile device. Let's say we want a hamburger menu icon to appear when it reaches a specific breakpoint that we've determined that this is a mobile device:

```
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 750px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`
```

Anything that is 750px or less will now show the icon.

A more extensive implementation might include defining constants that contain both the sizes.

```
const size = {
  mobile: '750px',
  laptop: '1920px',
}

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  laptop: `(min-width: ${size.laptop})`
};
```

Then we can use it in this case where the Page should be different size depending which device size it is on:

```
import styled from 'styled-components';
import { device } from './device';

const Page = styled.div`
  margin: auto;
  font-family: "sans-serif";
  text-align: center;

  @media ${device.mobile} {
    max-width: 720px;
  }

  @media ${device.laptop} {
    max-width: 1900px;
  }
`;
```

There are many other ways we can use media queries to refactor the design of the website. For example, we have to consider what should the navbar look like when it reaches a certain size? What should the homepage look like when we reach a certain size? etc. It is more difficult to refactor, but it will essentially future proof the web interface from the everchanging amount of screen sizes that are available.

