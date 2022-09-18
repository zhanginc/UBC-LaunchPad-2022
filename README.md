# UBC-LaunchPad-2022

Ideally, when you build web page designs, the consideration for different size screen models should always be considered. By making the design extremely specific to a specification like 1920x1080 pixels restricts it from looking clean when the window sizes changes. Instead of building another design that fits another exact specific 750x1334, it is better to refactor the design into being responsive.

With responsive design, whichever device a user is viewing the website on becomes irrelevant. They know is that the site works, no matter what device is viewing it.

For example, let's say we want some sort of icon to appear when it reaches a specific breakpoint that we've determined that this is a mobile device:

```
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
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
