# PianoRoll Frontend Task

## Final result

(Movie)

Everything is working on desktop, tablet and mobile screens. Application is logging selection start and end points to the console.

## Used frameworks

Initaial project was migrated to React Framework using Vite.js as a project creation tool.

To run this projekt localy you have to:

1. Install node.js (and npm if you don't have it)
2. Clone projekt from my git
3. Run npm install
4. Run npm run dev

## Problems and solutions

### Logic and view separation

In you inital project logic of processing data is mixed with presentaion. I've tried to seperate is at the beginnig. Goal was to have components responsible only for presentaion of SVG generated by your PianoRoll object.

### Dynamic data form API

Application from "user experience" perspective have two "pages" (pages are in user perspective - this is single page application):

1. Main page - with piano rolls grid
2. Details page - showing selected piano roll with list on the side

This allows for example send direct link to someone pointing on selected piano roll. SEO is another thing.

To build this in a proper way Backend API should have two end points:

1. getPianoRollList - list of all piano rolls
2. getPianoRollDetails - one selected piano roll (by ID)

Using existing API I have to pass array of piano rolls between "pages". Because of this when I hit http://localhost:5173/details/5 I don't have list of all piano rolls to extrtact fifth one. I've handled this by showing error page. You have to go thru main page to get list.

### Selection

Selection is workign on desktop and mobile (different events to listen). I didn't manage to implement:

1. Selection from right to left - it's more complicated because I have to dynamicly change direction of layout to draw selection box in other direction
2. Handlign of getting out of piano roll box to automaticlly end selection on boarder of image.

I'm aware of this flaws but my seniority in front end development is not enough :(

## Summary

Thank you for this challage! It was very informative and I've learn a lot having fun with piano rolls :) My personal opinion is this challenge was very advanced for a junior front end developer. Not impossible but demanding.
