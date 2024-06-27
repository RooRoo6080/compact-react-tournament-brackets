# react-tournament-brackets
Forked from [@g-loot/react-tournament-brackets](https://github.com/g-loot/react-tournament-brackets) with fixed graphics and a compact layout

## Changes
 - Fixed issue where connector line doesn't line up with boxes
 - Made _much_ more compact to fit more matches
 - 2nd final in double elimination tournaments renamed to 'Grand Final' to keep remaining match titles accurate
 - Minor misc graphics fixes

Note: these changes have only been tested on the Double Elimination tournament style.


## Installation & Use
Either copy all files into the React ```src``` directory and import with ```import { DoubleEliminationBracket, Match, SVGViewer, createTheme, etc... } from './FOLDER-NAME/react-tournament-brackets';```

OR

Copy all files into ```node_modules``` under ```@rooroo/react-tournament-brackets``` and treat it as a regular npm import.

![image](https://github.com/RooRoo6080/react-tournament-brackets/assets/67977174/3af0e3a6-58b4-46e0-b081-daad03280bf8)
