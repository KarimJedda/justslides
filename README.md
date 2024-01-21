# justslides

Create a file called `slides.txt` with following contents, at the root of the directory:

```
% Title
% Author
% Date

slide 1

---

slide 2

---

```

add your content then run `./generate.sh`. This will create a file called `output.html` with your presentation. An example is provided under `docs/index.html`

Feel free to adapt the paths as you wish but make sure to have all the media available under the right path. 


## Prerequisites

You need `pandoc` installed on your system. You can install pandoc by following the instructions [here](https://pandoc.org/installing.html).

I've tested it with pandoc 3.1.8 on Ubuntu. 

## Credits & inspiration

- [sent](https://tools.suckless.org/sent/) 
- [weenote](https://github.com/jed/weenote) 