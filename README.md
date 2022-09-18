# UBC-LaunchPad-2022

Ideally, when you build web page designs, different size screen models should always be considered before fully implementing the interface. By making the design extremely specific to a specification like 1920x1080 pixels restricts it from looking correct when the window sizes changes. Instead of building another design that fits another exact specific 750x1334 pixels, it is better to refactor the design into being responsive.

With responsive design, whichever device a user is viewing the website on becomes irrelevant. They know is that the site works, no matter what device is viewing it.

Media queries are a key part of responsive web design, as it allows different layouts to occur depending on the size of the viewport. We can also use this to detect other things about the environment the site is running on, for example whether the user is using a touchscreen rather than a mouse.

For our case, we have a webpage we are trying to convert to fit a mobile device. Let's say we want an icon to appear when it reaches a specific breakpoint that we've determined that this is a mobile device:

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
