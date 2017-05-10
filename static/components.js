const components = {
    "unpacked": {
        "description": "Development files",
        "help_text": "Unpacked JavaScript files used only in the development of MathJax itself.",
        "paths": {
            "unpacked": []
        }
    },
    "fontAsana": {
        "description": "Asana",
        "paths": {
            "fonts/HTML-CSS/Asana-Math/eot": ['htmlCssOutput|commonHtmlOutput','eot'],
            "fonts/HTML-CSS/Asana-Math/otf": ['htmlCssOutput|commonHtmlOutput','otf'],
            "fonts/HTML-CSS/Asana-Math/woff": ['htmlCssOutput|commonHtmlOutput','woff'],
            "jax/output/HTML-CSS/fonts/Asana-Math": ['htmlCssOutput|commonHtmlOutput'],
            "unpacked/jax/output/HTML-CSS/fonts/Asana-Math": ['htmlCssOutput|commonHtmlOutput','unpacked'],
            "jax/output/SVG/fonts/Asana-Math": ['svgOutput'],
            "unpacked/jax/output/SVG/fonts/Asana-Math": ['unpacked','svgOutput']
        }
    },
    "fontGyrePagella": {
        "description": "Gyre-Pagella",
        "paths": {
            "fonts/HTML-CSS/Gyre-Pagella/eot": ['htmlCssOutput|commonHtmlOutput','eot'],
            "fonts/HTML-CSS/Gyre-Pagella/otf": ['htmlCssOutput|commonHtmlOutput','otf'],
            "fonts/HTML-CSS/Gyre-Pagella/woff": ['htmlCssOutput|commonHtmlOutput','woff'],
            "jax/output/HTML-CSS/fonts/Gyre-Pagella": ['htmlCssOutput|commonHtmlOutput'],
            "unpacked/jax/output/HTML-CSS/fonts/Gyre-Pagella": ['htmlCssOutput|commonHtmlOutput','unpacked'],
            "jax/output/SVG/fonts/Gyre-Pagella": ['svgOutput'],
            "unpacked/jax/output/SVG/fonts/Gyre-Pagella": ['svgOutput','unpacked']
        }
    },
    "fontGyreTermes": {
        "description": "Gyre-Termes",
        "paths": {
            "fonts/HTML-CSS/Gyre-Termes/eot": ['htmlCssOutput|commonHtmlOutput','eot'],
            "fonts/HTML-CSS/Gyre-Termes/otf": ['htmlCssOutput|commonHtmlOutput','otf'],
            "fonts/HTML-CSS/Gyre-Termes/woff": ['htmlCssOutput|commonHtmlOutput','woff'],
            "jax/output/HTML-CSS/fonts/Gyre-Termes": ['htmlCssOutput|commonHtmlOutput'],
            "unpacked/jax/output/HTML-CSS/fonts/Gyre-Termes": ['htmlCssOutput|commonHtmlOutput','unpacked'],
            "jax/output/SVG/fonts/Gyre-Termes": ['svgOutput'],
            "unpacked/jax/output/SVG/fonts/Gyre-Termes": ['svgOutput','unpacked']
        }
    },
    "fontLatinModern": {
        "description": "Latin Modern",
        "paths": {
            "fonts/HTML-CSS/Latin-Modern/eot": ['htmlCssOutput|commonHtmlOutput','eot'],
            "fonts/HTML-CSS/Latin-Modern/otf": ['htmlCssOutput|commonHtmlOutput','otf'],
            "fonts/HTML-CSS/Latin-Modern/woff": ['htmlCssOutput|commonHtmlOutput','woff'],
            "jax/output/HTML-CSS/fonts/Latin-Modern": ['htmlCssOutput|commonHtmlOutput'],
            "unpacked/jax/output/HTML-CSS/fonts/Latin-Modern": ['htmlCssOutput|commonHtmlOutput','unpacked'],
            "jax/output/SVG/fonts/Latin-Modern": ['svgOutput'],
            "unpacked/jax/output/SVG/fonts/Latin-Modern": ['svgOutput','unpacked']
        }
    },
    "fontNeoEuler": {
        "description": "Neo-Euler",
        "paths": {
            "fonts/HTML-CSS/Neo-Euler/eot": ['htmlCssOutput|commonHtmlOutput','eot'],
            "fonts/HTML-CSS/Neo-Euler/otf": ['htmlCssOutput|commonHtmlOutput','otf'],
            "fonts/HTML-CSS/Neo-Euler/woff": ['htmlCssOutput|commonHtmlOutput','woff'],
            "jax/output/HTML-CSS/fonts/Neo-Euler": ['htmlCssOutput|commonHtmlOutput'],
            "unpacked/jax/output/HTML-CSS/fonts/Neo-Euler": ['htmlCssOutput|commonHtmlOutput','unpacked'],
            "jax/output/SVG/fonts/Neo-Euler": ['svgOutput'],
            "unpacked/jax/output/SVG/fonts/Neo-Euler": ['svgOutput','unpacked']
        }
    },
    "fontStix": {
        "description": "STIX",
        "paths": {
            "fonts/HTML-CSS/STIX": ['htmlCssOutput|commonHtmlOutput'],
            "jax/output/HTML-CSS/fonts/STIX": ['htmlCssOutput|commonHtmlOutput'],
            "unpacked/jax/output/HTML-CSS/fonts/STIX": ['htmlCssOutput|commonHtmlOutput','unpacked'],
            "jax/output/SVG/fonts/STIX": ['svgOutput'],
            "unpacked/jax/output/SVG/fonts/STIX": ['svgOutput','unpacked']
        }
    },
    "fontStixWeb": {
        "description": "STIX-Web",
        "paths": {
            "fonts/HTML-CSS/STIX-Web/eot": ['htmlCssOutput|commonHtmlOutput','eot'],
            "fonts/HTML-CSS/STIX-Web/otf": ['htmlCssOutput|commonHtmlOutput','otf'],
            "fonts/HTML-CSS/STIX-Web/woff": ['htmlCssOutput|commonHtmlOutput','woff'],
            "jax/output/HTML-CSS/fonts/STIX-Web": ['htmlCssOutput|commonHtmlOutput'],
            "unpacked/jax/output/HTML-CSS/fonts/STIX-Web": ['htmlCssOutput|commonHtmlOutput','unpacked'],
            "jax/output/SVG/fonts/STIX-Web": ['svgOutput'],
            "unpacked/jax/output/SVG/fonts/STIX-Web": ['svgOutput','unpacked']
        }
    },
    "fontTeX": {
        "description": "TeX",
        "paths": {
            "fonts/HTML-CSS/TeX/eot": ['htmlCssOutput|commonHtmlOutput','eot'],
            "fonts/HTML-CSS/TeX/otf": ['htmlCssOutput|commonHtmlOutput','otf'],
            "fonts/HTML-CSS/TeX/png": ['htmlCssOutput|commonHtmlOutput','png'],
            "fonts/HTML-CSS/TeX/svg": ['htmlCssOutput|commonHtmlOutput','svg'],
            "fonts/HTML-CSS/TeX/woff": ['htmlCssOutput|commonHtmlOutput','woff'],
            "jax/output/HTML-CSS/fonts/TeX": ['htmlCssOutput|commonHtmlOutput'],
            "unpacked/jax/output/HTML-CSS/fonts/TeX": ['htmlCssOutput|commonHtmlOutput','unpacked'],
            "jax/output/SVG/fonts/TeX": ['svgOutput'],
            "unpacked/jax/output/SVG/fonts/TeX": ['svgOutput','unpacked']
        }
    },
    "eot": {
        "description": "Fonts in .eot format",
        "help_text": "Only needed if you want to support IE < 9.",
        "paths": {
            "fonts/HTML-CSS/Asana-Math/eot": ['htmlCssOutput|commonHtmlOutput','fontAsana'],
            "fonts/HTML-CSS/Gyre-Pagella/eot": ['htmlCssOutput|commonHtmlOutput','fontGyrePagella'],
            "fonts/HTML-CSS/Gyre-Termes/eot": ['htmlCssOutput|commonHtmlOutput','fontGyreTermes'],
            "fonts/HTML-CSS/Latin-Modern/eot": ['htmlCssOutput|commonHtmlOutput','fontLatinModern'],
            "fonts/HTML-CSS/Neo-Euler/eot": ['htmlCssOutput|commonHtmlOutput','fontNeoEuler'],
            "fonts/HTML-CSS/STIX-Web/eot": ['htmlCssOutput|commonHtmlOutput','fontStixWeb'],
            "fonts/HTML-CSS/TeX/eot": ['htmlCssOutput|commonHtmlOutput','fontTeX'],
        }
    },
    "otf": {
        "description": "Fonts in .otf format",
        "help_text": "Not needed if you also include .woff.",
        "paths": {
            "fonts/HTML-CSS/Asana-Math/otf": ['htmlCssOutput|commonHtmlOutput','fontAsana'],
            "fonts/HTML-CSS/Gyre-Pagella/otf": ['htmlCssOutput|commonHtmlOutput','fontGyrePagella'],
            "fonts/HTML-CSS/Gyre-Termes/otf": ['htmlCssOutput|commonHtmlOutput','fontGyreTermes'],
            "fonts/HTML-CSS/Latin-Modern/otf": ['htmlCssOutput|commonHtmlOutput','fontLatinModern'],
            "fonts/HTML-CSS/Neo-Euler/otf": ['htmlCssOutput|commonHtmlOutput','fontNeoEuler'],
            "fonts/HTML-CSS/STIX-Web/otf": ['htmlCssOutput|commonHtmlOutput','fontStixWeb'],
            "fonts/HTML-CSS/TeX/otf": ['htmlCssOutput|commonHtmlOutput','fontTeX'],
        }
    },
    "png": {
        "description": "Fonts in .png format",
        "help_text": "Fallback used if other fonts can't load.",
        "paths": {
            "fonts/HTML-CSS/Asana-Math/png": ['htmlCssOutput|commonHtmlOutput','fontAsana'],
            "fonts/HTML-CSS/Gyre-Pagella/png": ['htmlCssOutput|commonHtmlOutput','fontGyrePagella'],
            "fonts/HTML-CSS/Gyre-Termes/png": ['htmlCssOutput|commonHtmlOutput','fontGyreTermes'],
            "fonts/HTML-CSS/Latin-Modern/png": ['htmlCssOutput|commonHtmlOutput','fontLatinModern'],
            "fonts/HTML-CSS/Neo-Euler/png": ['htmlCssOutput|commonHtmlOutput','fontNeoEuler'],
            "fonts/HTML-CSS/STIX-Web/png": ['htmlCssOutput|commonHtmlOutput','fontStixWeb'],
            "fonts/HTML-CSS/TeX/png": ['htmlCssOutput|commonHtmlOutput','fontTeX'],
        }
    },
    "svg": {
        "description": "Fonts in .svg format",
        "help_text": "Must include if you want to support Safari < 5.0 (from 2009) on iOS.",
        "paths": {
            "fonts/HTML-CSS/Asana-Math/svg": ['htmlCssOutput|commonHtmlOutput','fontAsana'],
            "fonts/HTML-CSS/Gyre-Pagella/svg": ['htmlCssOutput|commonHtmlOutput','fontGyrePagella'],
            "fonts/HTML-CSS/Gyre-Termes/svg": ['htmlCssOutput|commonHtmlOutput','fontGyreTermes'],
            "fonts/HTML-CSS/Latin-Modern/svg": ['htmlCssOutput|commonHtmlOutput','fontLatinModern'],
            "fonts/HTML-CSS/Neo-Euler/svg": ['htmlCssOutput|commonHtmlOutput','fontNeoEuler'],
            "fonts/HTML-CSS/STIX-Web/svg": ['htmlCssOutput|commonHtmlOutput','fontStixWeb'],
            "fonts/HTML-CSS/TeX/svg": ['htmlCssOutput|commonHtmlOutput','fontTeX'],
        }
    },
    "woff": {
        "description": "Fonts in .woff format",
        "help_text": "Will work in every browser except Safari < 5.0 (from 2010) on iOS.",
        "paths": {
            "fonts/HTML-CSS/Asana-Math/woff": ['htmlCssOutput|commonHtmlOutput','fontAsana'],
            "fonts/HTML-CSS/Gyre-Pagella/woff": ['htmlCssOutput|commonHtmlOutput','fontGyrePagella'],
            "fonts/HTML-CSS/Gyre-Termes/woff": ['htmlCssOutput|commonHtmlOutput','fontGyreTermes'],
            "fonts/HTML-CSS/Latin-Modern/woff": ['htmlCssOutput|commonHtmlOutput','fontLatinModern'],
            "fonts/HTML-CSS/Neo-Euler/woff": ['htmlCssOutput|commonHtmlOutput','fontNeoEuler'],
            "fonts/HTML-CSS/STIX-Web/woff": ['htmlCssOutput|commonHtmlOutput','fontStixWeb'],
            "fonts/HTML-CSS/TeX/woff": ['htmlCssOutput|commonHtmlOutput','fontTeX'],
        }
    },
    "asciimathInput": {
        "description": "AsciiMath input",
        "paths": {
            "config/AM_CHTML-full.js": ['commonHtmlOutput'],
            "config/AM_CHTML.js": ['commonHtmlOutput'],
            "config/AM_HTMLorMML-full.js": ['htmlCssOutput','mathmlOutput'],
            "config/AM_HTMLorMML.js": ['htmlCssOutput','mathmlOutput'],
            "config/AM_SVG-full.js": ['svgOutput'],
            "config/AM_SVG.js": ['svgOutput'],

            "config/TeX-MML-AM_CHTML-full.js": ['texInput','mathmlInput','commonHtmlOutput'],
            "config/TeX-MML-AM_CHTML.js": ['texInput','mathmlInput','commonHtmlOutput'],
            "config/TeX-MML-AM_HTMLorMML-full.js": ['texInput','mathmlInput','htmlCssOutput','mathmlOutput'],
            "config/TeX-MML-AM_HTMLorMML.js": ['texInput','mathmlInput','htmlCssOutput','mathmlOutput'],
            "config/TeX-MML-AM_SVG-full.js": ['texInput','mathmlInput','svgOutput'],
            "config/TeX-MML-AM_SVG.js": ['texInput','mathmlInput','svgOutput'],

            "unpacked/config/AM_CHTML-full.js": ['commonHtmlOutput','unpacked'],
            "unpacked/config/AM_CHTML.js": ['commonHtmlOutput','unpacked'],
            "unpacked/config/AM_HTMLorMML-full.js": ['htmlCssOutput','mathmlOutput','unpacked'],
            "unpacked/config/AM_HTMLorMML.js": ['htmlCssOutput','mathmlOutput','unpacked'],
            "unpacked/config/AM_SVG-full.js": ['svgOutput','unpacked'],
            "unpacked/config/AM_SVG.js": ['svgOutput','unpacked'],

            "unpacked/config/TeX-MML-AM_CHTML-full.js": ['texInput','mathmlInput','commonHtmlOutput','unpacked'],
            "unpacked/config/TeX-MML-AM_CHTML.js": ['texInput','mathmlInput','commonHtmlOutput','unpacked'],
            "unpacked/config/TeX-MML-AM_HTMLorMML-full.js": ['texInput','mathmlInput','htmlCssOutput','mathmlOutput','unpacked'],
            "unpacked/config/TeX-MML-AM_HTMLorMML.js": ['texInput','mathmlInput','htmlCssOutput','mathmlOutput','unpacked'],
            "unpacked/config/TeX-MML-AM_SVG-full.js": ['texInput','mathmlInput','svgOutput','unpacked'],
            "unpacked/config/TeX-MML-AM_SVG.js": ['texInput','mathmlInput','svgOutput','unpacked'],

            "jax/input/AsciiMath": [],
            "unpacked/jax/input/AsciiMath": ['unpacked']
        }
    },
    "mathmlInput": {
        "description": "MathML input",
        "paths": {
            "config/MML_CHTML.js": ['commonHtmlOutput'],
            "config/MML_HTMLorMML.js": ['htmlCssOutput','mathmlOutput'],
            "config/MML_SVG.js": ['svgOutput'],
            "config/MML_CHTML-full.js": ['commonHtmlOutput'],
            "config/MML_HTMLorMML-full.js": ['htmlCssOutput','mathmlOutput'],
            "config/MML_SVG-full.js": ['svgOutput'],

            "config/TeX-MML-AM_CHTML.js": ['texInput','asciimathInput','commonHtmlOutput'],
            "config/TeX-MML-AM_HTMLorMML.js": ['texInput','asciimathInput','htmlCssOutput','mathmlOutput'],
            "config/TeX-MML-AM_SVG.js": ['texInput','asciimathInput','svgOutput'],
            "config/TeX-MML-AM_CHTML-full.js": ['texInput','asciimathInput','commonHtmlOutput'],
            "config/TeX-MML-AM_HTMLorMML-full.js": ['texInput','asciimathInput','htmlCssOutput','mathmlOutput'],
            "config/TeX-MML-AM_SVG-full.js": ['texInput','asciimathInput','svgOutput'],

            "config/TeX-AMS-MML_HTMLorMML.js": ['texInput','htmlCssOutput','mathmlOutput'],
            "config/TeX-AMS-MML_SVG.js": ['texInput','svgOutput'],
            "config/TeX-AMS-MML_HTMLorMML-full.js": ['texInput','htmlCssOutput','mathmlOutput'],
            "config/TeX-AMS-MML_SVG-full.js": ['texInput','svgOutput'],

            "unpacked/config/MML_CHTML.js": ['commonHtmlOutput','unpacked'],
            "unpacked/config/MML_HTMLorMML.js": ['htmlCssOutput','mathmlOutput','unpacked'],
            "unpacked/config/MML_SVG.js": ['svgOutput','unpacked'],
            "unpacked/config/MML_CHTML-full.js": ['commonHtmlOutput','unpacked'],
            "unpacked/config/MML_HTMLorMML-full.js": ['htmlCssOutput','mathmlOutput','unpacked'],
            "unpacked/config/MML_SVG-full.js": ['svgOutput','unpacked'],

            "unpacked/config/TeX-MML-AM_CHTML.js": ['texInput','asciimathInput','commonHtmlOutput','unpacked'],
            "unpacked/config/TeX-MML-AM_HTMLorMML.js": ['texInput','asciimathInput','htmlCssOutput','mathmlOutput','unpacked'],
            "unpacked/config/TeX-MML-AM_SVG.js": ['texInput','asciimathInput','svgOutput','unpacked'],
            "unpacked/config/TeX-MML-AM_CHTML-full.js": ['texInput','asciimathInput','commonHtmlOutput','unpacked'],
            "unpacked/config/TeX-MML-AM_HTMLorMML-full.js": ['texInput','asciimathInput','htmlCssOutput','mathmlOutput','unpacked'],
            "unpacked/config/TeX-MML-AM_SVG-full.js": ['texInput','asciimathInput','svgOutput','unpacked'],

            "unpacked/config/TeX-AMS-MML_HTMLorMML.js": ['texInput','htmlCssOutput','mathmlOutput','unpacked'],
            "unpacked/config/TeX-AMS-MML_SVG.js": ['texInput','svgOutput','unpacked'],
            "unpacked/config/TeX-AMS-MML_HTMLorMML-full.js": ['texInput','htmlCssOutput','mathmlOutput','unpacked'],
            "unpacked/config/TeX-AMS-MML_SVG-full.js": ['texInput','svgOutput','unpacked'],

            "jax/input/MathML": [],
        }
    },
    "texInput": {
        "description": "TeX input",
        "paths": {
            "config/TeX-AMS-MML_HTMLorMML.js": ['mathmlInput','htmlCssOutput','mathmlOutput'],
            "config/TeX-AMS-MML_SVG.js": ['mathmlInput','svgOutput'],
            "config/TeX-AMS_CHTML.js": ['commonHtmlOutput'],
            "config/TeX-AMS_HTML.js": ['htmlCssOutput'],
            "config/TeX-AMS_SVG.js": ['svgOutput'],
            "config/TeX-MML-AM_CHTML.js": ['mathmlInput','asciimathInput','commonHtmlOutput'],
            "config/TeX-MML-AM_HTMLorMML.js": ['mathmlInput','asciimathInput','htmlCssOutput','mathmlOutput'],
            "config/TeX-MML-AM_SVG.js": ['mathmlInput','asciimathInput','svgOutput'],
            "config/TeX-AMS-MML_HTMLorMML-full.js": ['mathmlInput','htmlCssOutput','mathmlOutput'],
            "config/TeX-AMS-MML_SVG-full.js": ['mathmlInput','svgOutput'],
            "config/TeX-AMS_CHTML-full.js": ['commonHtmlOutput'],
            "config/TeX-AMS_HTML-full.js": ['htmlCssOutput'],
            "config/TeX-AMS_SVG-full.js": ['svgOutput'],
            "config/TeX-MML-AM_CHTML-full.js": ['mathmlInput','asciimathInput','commonHtmlOutput'],
            "config/TeX-MML-AM_HTMLorMML-full.js": ['mathmlInput','asciimathInput','htmlCssOutput','mathmlOutput'],
            "config/TeX-MML-AM_SVG-full.js": ['mathmlInput','asciimathInput','svgOutput'],
            "unpacked/config/TeX-AMS-MML_HTMLorMML.js": ['mathmlInput','htmlCssOutput','mathmlOutput','unpacked'],
            "unpacked/config/TeX-AMS-MML_SVG.js": ['mathmlInput','svgOutput','unpacked'],
            "unpacked/config/TeX-AMS_CHTML.js": ['commonHtmlOutput','unpacked'],
            "unpacked/config/TeX-AMS_HTML.js": ['htmlCssOutput','unpacked'],
            "unpacked/config/TeX-AMS_SVG.js": ['svgOutput','unpacked'],
            "unpacked/config/TeX-MML-AM_CHTML.js": ['mathmlInput','asciimathInput','commonHtmlOutput','unpacked'],
            "unpacked/config/TeX-MML-AM_HTMLorMML.js": ['mathmlInput','asciimathInput','htmlCssOutput','mathmlOutput','unpacked'],
            "unpacked/config/TeX-MML-AM_SVG.js": ['mathmlInput','asciimathInput','svgOutput','unpacked'],
            "unpacked/config/TeX-AMS-MML_HTMLorMML-full.js": ['mathmlInput','htmlCssOutput','mathmlOutput','unpacked'],
            "unpacked/config/TeX-AMS-MML_SVG-full.js": ['mathmlInput','svgOutput','unpacked'],
            "unpacked/config/TeX-AMS_CHTML-full.js": ['commonHtmlOutput','unpacked'],
            "unpacked/config/TeX-AMS_HTML-full.js": ['htmlCssOutput','unpacked'],
            "unpacked/config/TeX-AMS_SVG-full.js": ['svgOutput','unpacked'],
            "unpacked/config/TeX-MML-AM_CHTML-full.js": ['mathmlInput','asciimathInput','commonHtmlOutput','unpacked'],
            "unpacked/config/TeX-MML-AM_HTMLorMML-full.js": ['mathmlInput','asciimathInput','htmlCssOutput','mathmlOutput','unpacked'],
            "unpacked/config/TeX-MML-AM_SVG-full.js": ['mathmlInput','asciimathInput','svgOutput','unpacked'],

            "jax/input/TeX": [],
            "unpacked/jax/input/TeX": ['unpacked']
        }
    },
    "extensionsAsciimath": {
        "description": "AsciiMath extension",
        "paths": {
            "extensions/asciimath2jax.js": ['asciimathInput'],
            "unpacked/extensions/asciimath2jax.js": ['asciimathInput','unpacked']
        }
    },
    "extensionsMathml": {
        "description": "All MathML extensions",
        "help_text": "Including the Content MathML translator.",
        "paths": {
            "extensions/MathML": ['mathmlInput'],
            "extensions/mml2jax.js": ['mathmlInput'],
            "unpacked/extensions/MathML": ['unpacked','mathmlInput'],
            "unpacked/extensions/mml2jax.js": ['unpacked','mathmlInput']
        }
    },
    "extensionsTeX": {
        "description": "All TeX extensions",
        "help_text": "Including the AMSmath extensions.",
        "paths": {
            "extensions/TeX": ['texInput'],
            "extensions/jsMath2jax.js": ['texInput'],
            "extensions/tex2jax.js": ['texInput'],
            "unpacked/extensions/TeX": ['unpacked','texInput'],
            "unpacked/extensions/jsMath2jax.js": ['unpacked','texInput'],
            "unpacked/extensions/tex2jax.js": ['unpacked','texInput']
        }
    },
    "extensionHtmlCss": {
        "description": "All HTML-CSS extensions",
        "paths": {
            "extensions/HTML-CSS": ['htmlCssOutput'],
            "unpacked/extensions/HTML-CSS": ['htmlCssOutput','unpacked']
        }
    },
    "commonHtmlOutput": {
        "description": "Common HTML output",
        "help_text": "High-quality output in all modern browsers, and faster than HTML-CSS.",
        "paths": {
            "config/AM_CHTML.js": ['asciimathInput'],
            "config/MML_CHTML.js": ['mathmlInput'],
            "config/TeX-AMS_CHTML.js": ['texInput'],
            "config/TeX-MML-AM_CHTML.js": ['texInput','mathmlInput'],
            "config/AM_CHTML-full.js": ['asciimathInput'],
            "config/MML_CHTML-full.js": ['mathmlInput'],
            "config/TeX-AMS_CHTML-full.js": ['texInput'],
            "config/TeX-MML-AM_CHTML-full.js": ['texInput','mathmlInput'],
            "unpacked/config/AM_CHTML.js": ['asciimathInput','unpacked'],
            "unpacked/config/MML_CHTML.js": ['mathmlInput','unpacked'],
            "unpacked/config/TeX-AMS_CHTML.js": ['texInput','unpacked'],
            "unpacked/config/TeX-MML-AM_CHTML.js": ['texInput','mathmlInput','unpacked'],
            "unpacked/config/AM_CHTML-full.js": ['asciimathInput','unpacked'],
            "unpacked/config/MML_CHTML-full.js": ['mathmlInput','unpacked'],
            "unpacked/config/TeX-AMS_CHTML-full.js": ['texInput','unpacked'],
            "unpacked/config/TeX-MML-AM_CHTML-full.js": ['texInput','mathmlInput','unpacked'],

            "jax/output/HTML-CSS/config.js": [],
            "jax/output/HTML-CSS/imageFonts.js": ["png"],
            "jax/output/HTML-CSS/jax.js": [],
            "jax/output/HTML-CSS/autoload": [],

            "unpacked/jax/output/HTML-CSS/config.js": ['unpacked'],
            "unpacked/jax/output/HTML-CSS/imageFonts.js": ["png",'unpacked'],
            "unpacked/jax/output/HTML-CSS/jax.js": ['unpacked'],
            "unpacked/jax/output/HTML-CSS/autoload": ['unpacked'],

            "jax/output/CommonHTML": [],
            "unpacked/jax/output/CommonHTML": ['unpacked'],
            "extensions/CHTML-preview.js": [],
            "unpacked/extensions/CHTML-preview.js": ['unpacked']
        }
    },
    "htmlCssOutput": {
        "description": "HTML-CSS output",
        "help_text": "The original high-quality renderer. Slower than Common HTML.",
        "paths": {
            "config/AM_HTMLorMML.js": ['asciimathInput','mathmlOutput'],
            "config/MML_HTMLorMML.js": ['mathmlInput','mathmlOutput'],
            "config/TeX-AMS-MML_HTMLorMML.js": ['texInput','mathmlInput','mathmlOutput'],
            "config/TeX-MML-AM_HTMLorMML.js": ['texInput','mathmlInput','asciimathInput','mathmlOutput'],

            "config/AM_HTMLorMML-full.js": ['asciimathInput','mathmlOutput'],
            "config/MML_HTMLorMML-full.js": ['mathmlInput','mathmlOutput'],
            "config/TeX-AMS-MML_HTMLorMML-full.js": ['texInput','mathmlInput','mathmlOutput'],
            "config/TeX-MML-AM_HTMLorMML-full.js": ['texInput','mathmlInput','asciimathInput','mathmlOutput'],

            "unpacked/config/AM_HTMLorMML.js": ['asciimathInput','mathmlOutput','unpacked'],
            "unpacked/config/MML_HTMLorMML.js": ['mathmlInput','mathmlOutput','unpacked'],
            "unpacked/config/TeX-AMS-MML_HTMLorMML.js": ['texInput','mathmlInput','mathmlOutput','unpacked'],
            "unpacked/config/TeX-MML-AM_HTMLorMML.js": ['texInput','mathmlInput','asciimathInput','mathmlOutput','unpacked'],

            "unpacked/config/AM_HTMLorMML-full.js": ['asciimathInput','mathmlOutput','unpacked'],
            "unpacked/config/MML_HTMLorMML-full.js": ['mathmlInput','mathmlOutput','unpacked'],
            "unpacked/config/TeX-AMS-MML_HTMLorMML-full.js": ['texInput','mathmlInput','mathmlOutput','unpacked'],
            "unpacked/config/TeX-MML-AM_HTMLorMML-full.js": ['texInput','mathmlInput','asciimathInput','mathmlOutput','unpacked'],

            "jax/output/HTML-CSS/config.js": [],
            "jax/output/HTML-CSS/imageFonts.js": ["png"],
            "jax/output/HTML-CSS/jax.js": [],
            "jax/output/HTML-CSS/autoload": [],

            "unpacked/jax/output/HTML-CSS/config.js": ['unpacked'],
            "unpacked/jax/output/HTML-CSS/imageFonts.js": ["png",'unpacked'],
            "unpacked/jax/output/HTML-CSS/jax.js": ['unpacked'],
            "unpacked/jax/output/HTML-CSS/autoload": ['unpacked'],
        }
    },
    "mathmlOutput": {
        "description": "MathML output",
        "help_text": "Uses the browser's internal MathML support, if present.",
        "paths": {
            "config/AM_HTMLorMML.js": ['asciimathInput','htmlCssOutput'],
            "config/MML_HTMLorMML.js": ['mathmlInput','htmlCssOutput'],
            "config/TeX-AMS-MML_HTMLorMML.js": ['texInput','mathmlInput','htmlCssOutput'],
            "config/TeX-MML-AM_HTMLorMML.js": ['texInput','mathmlInput','asciimathInput','htmlCssOutput'],

            "config/AM_HTMLorMML-full.js": ['asciimathInput','htmlCssOutput'],
            "config/MML_HTMLorMML-full.js": ['mathmlInput','htmlCssOutput'],
            "config/TeX-AMS-MML_HTMLorMML-full.js": ['texInput','mathmlInput','htmlCssOutput'],
            "config/TeX-MML-AM_HTMLorMML-full.js": ['texInput','mathmlInput','asciimathInput','htmlCssOutput'],

            "unpacked/config/AM_HTMLorMML.js": ['asciimathInput','htmlCssOutput','unpacked'],
            "unpacked/config/MML_HTMLorMML.js": ['mathmlInput','htmlCssOutput','unpacked'],
            "unpacked/config/TeX-AMS-MML_HTMLorMML.js": ['texInput','mathmlInput','htmlCssOutput','unpacked'],
            "unpacked/config/TeX-MML-AM_HTMLorMML.js": ['texInput','mathmlInput','asciimathInput','htmlCssOutput','unpacked'],

            "unpacked/config/AM_HTMLorMML-full.js": ['asciimathInput','htmlCssOutput','unpacked'],
            "unpacked/config/MML_HTMLorMML-full.js": ['mathmlInput','htmlCssOutput','unpacked'],
            "unpacked/config/TeX-AMS-MML_HTMLorMML-full.js": ['texInput','mathmlInput','htmlCssOutput','unpacked'],
            "unpacked/config/TeX-MML-AM_HTMLorMML-full.js": ['texInput','mathmlInput','asciimathInput','htmlCssOutput','unpacked'],
            "jax/output/NativeMML": [],
            "unpacked/jax/output/NativeMML": ['unpacked']
        }
    },
    "svgOutput": {
        "description": "SVG output",
        "help_text": "Slightly faster than HTML-CSS, and looks better in print.",
        "paths": {
            "config/AM_SVG.js": ['asciimathInput'],
            "config/MML_SVG.js": ['mathmlInput'],
            "config/TeX-AMS-MML_SVG.js": ['texInput','mathmlInput'],
            "config/TeX-AMS_SVG.js": ['texInput'],
            "config/TeX-MML-AM_SVG.js": ['texInput','mathmlInput','asciimathInput'],
            "unpacked/config/AM_SVG.js": ['asciimathInput','unpacked'],
            "unpacked/config/MML_SVG.js": ['mathmlInput','unpacked'],
            "unpacked/config/TeX-AMS-MML_SVG.js": ['texInput','mathmlInput','unpacked'],
            "unpacked/config/TeX-AMS_SVG.js": ['texInput','unpacked'],
            "unpacked/config/TeX-MML-AM_SVG.js": ['texInput','mathmlInput','asciimathInput','unpacked'],

            "config/AM_SVG-full.js": ['asciimathInput'],
            "config/MML_SVG-full.js": ['mathmlInput'],
            "config/TeX-AMS-MML_SVG-full.js": ['texInput','mathmlInput'],
            "config/TeX-AMS_SVG-full.js": ['texInput'],
            "config/TeX-MML-AM_SVG-full.js": ['texInput','mathmlInput','asciimathInput'],
            "unpacked/config/AM_SVG-full.js": ['asciimathInput','unpacked'],
            "unpacked/config/MML_SVG-full.js": ['mathmlInput','unpacked'],
            "unpacked/config/TeX-AMS-MML_SVG-full.js": ['texInput','mathmlInput','unpacked'],
            "unpacked/config/TeX-AMS_SVG-full.js": ['texInput','unpacked'],
            "unpacked/config/TeX-MML-AM_SVG-full.js": ['texInput','mathmlInput','asciimathInput','unpacked'],

            "jax/output/SVG/config.js": [],
            "jax/output/SVG/jax.js": [],
            "jax/output/SVG/autoload": [],

            "unpacked/jax/output/SVG/config.js": ['unpacked'],
            "unpacked/jax/output/SVG/jax.js": ['unpacked'],
            "unpacked/jax/output/SVG/autoload": ['unpacked'],
        }
    },
    "previewHtmlOutput": {
        "description": "Preview HTML output",
        "help_text": "A very fast render which can complete before the more correct rendering.",
        "paths": {
            "jax/output/PreviewHTML": [],
            "unpacked/jax/output/PreviewHTML": ['unpacked'],
            "extensions/fast-preview.js": [],
            "unpacked/extensions/fast-preview.js": ['unpacked'],
            "extensions/CHTML-preview.js": [],
            "unpacked/extensions/CHTML-preview.js": ['unpacked']
        }
    },
    "plainSourceOutput": {
        "description": "Plain source output",
        "help_text": "Reproduces the input exactly without any processing.",
        "paths": {
            "jax/output/PlainSource": [],
            "unpacked/jax/output/PlainSource": ['unpacked']
        }
    },
    "locales": {
        "description": "Localisation files",
        "paths": {
            "localization": [],
            "unpacked/localization": ['unpacked']
        }
    },
    "miscConfig": {
        "description": "Local, Accessible, default, and Safe configs",
        "paths": {
            "config/local": [],
            "unpacked/config/local": ['unpacked'],
            "config/Accessible-full.js": [],
            "unpacked/config/Accessible-full.js": ['unpacked'],
            "config/Accessible.js": [],
            "unpacked/config/Accessible.js": ['unpacked'],
            "config/default.js": [],
            "unpacked/config/defaul.js": ['unpacked'],
            "config/Safe.js": [],
            "unpacked/config/Safe.js": ['unpacked']
        }
    },
    "a11yExtensions": {
        "description": "a11y (accessibility) extensions",
        "paths": {
            "extensions/AssistiveMML.js": [],
            "unpacked/extensions/AssistiveMML.js": ['unpacked']
        }
    },
    "miscExtensions": {
        "description": "Miscellaneous extensions",
        "paths": {
            "extensions/FontWarnings.js": [],
            "extensions/HelpDialog.js": [],
            "extensions/MatchWebFonts.js": [],
            "extensions/MathEvents.js": [],
            "extensions/MathMenu.js": [],
            "extensions/MathZoom.js": [],
            "extensions/Safe.js": [],
            "extensions/CHTML-preview.js": ['commonHtmlOutput'],
            "unpacked/extensions/FontWarnings.js": ['unpacked'],
            "unpacked/extensions/HelpDialog.js": ['unpacked'],
            "unpacked/extensions/MatchWebFonts.js": ['unpacked'],
            "unpacked/extensions/MathEvents.js": ['unpacked'],
            "unpacked/extensions/MathMenu.js": ['unpacked'],
            "unpacked/extensions/MathZoom.js": ['unpacked'],
            "unpacked/extensions/Safe.js": ['unpacked'],
            "unpacked/extensions/CHTML-preview.js": ['unpacked','commonHtmlOutput']
        }
    },
    "notcode": {
        "description": "Non-code files",
        "help_text": "Various files used by build systems, the LICENSE and README files.",
        "paths": {
            ".gitignore": [],
            "CONTRIBUTING.md": [],
            "README-branch.txt": [],
            "README.md": [],
            "bower.json": [],
            "composer.json": [],
            ".npmignore": [],
            "package.json": [],
            "LICENSE": []
        }
    },
    "test": {
        "description": "Test files",
        "help_text": "Pages used to test that MathJax is working properly.",
        "paths": {
            "test": []
        }
    }
}

const component_groups = [
    {
        "name": "Fonts",
        "components": ["fontAsana","fontGyrePagella","fontGyreTermes","fontLatinModern","fontNeoEuler","fontStix","fontStixWeb","fontTeX"]
    },
    {
        "name": "Font formats",
        "components": ["woff","svg","otf","png","eot"]
    },
    {
        "name": "Input formats",
        "components": ["asciimathInput","mathmlInput","texInput"]
    },
    {
        "name": "Output formats",
        "components": ["commonHtmlOutput","htmlCssOutput","svgOutput","mathmlOutput","previewHtmlOutput","plainSourceOutput"]
    },
    {
        "name": "Extensions",
        "components": ["extensionsAsciimath","extensionsMathml","extensionsTeX","extensionHtmlCss","a11yExtensions","miscExtensions"]
    },
    {
        "name": "Other components",
        "components": ["unpacked","locales","miscConfig","notcode","test"]
    }
]
