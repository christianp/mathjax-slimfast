const components = {
    "unpacked": {
        "description": "Development files",
        "paths": {
            "unpacked": []
        }
    },
    "packed": {
        "description": "The entire MathJax distribution",
        "paths": {
            "config": [],
            "docs": [],
            "extensions": [],
            "jax": [],
            "fonts": [],
            "localization": [],
            "MathJax.js": []
        }
    },
    "configs": {
        "description": "All configuration files",
        "paths": {
            "config": [],
            "unpacked/config": ['unpacked']
        }
    },
    "fontAsana": {
        "description": "The Asana font",
        "paths": {
            "fonts/HTML-CSS/Asana-Math/eot": ['htmlCssOutput','eot'],
            "fonts/HTML-CSS/Asana-Math/otf": ['htmlCssOutput','otf'],
            "fonts/HTML-CSS/Asana-Math/woff": ['htmlCssOutput','woff'],
            "jax/output/HTML-CSS/fonts/Asana-Math": ['htmlCssOutput'],
            "unpacked/jax/output/HTML-CSS/fonts/Asana-Math": ['htmlCssOutput','unpacked'],
            "jax/output/SVG/fonts/Asana-Math": ['svgOutput'],
            "unpacked/jax/output/SVG/fonts/Asana-Math": ['unpacked','svgOutput']
        }
    },
    "fontGyrePagella": {
        "description": "The Gyre-Pagella font",
        "paths": {
            "fonts/HTML-CSS/Gyre-Pagella/eot": ['htmlCssOutput','eot'],
            "fonts/HTML-CSS/Gyre-Pagella/otf": ['htmlCssOutput','otf'],
            "fonts/HTML-CSS/Gyre-Pagella/woff": ['htmlCssOutput','woff'],
            "jax/output/HTML-CSS/fonts/Gyre-Pagella": ['htmlCssOutput'],
            "unpacked/jax/output/HTML-CSS/fonts/Gyre-Pagella": ['htmlCssOutput','unpacked'],
            "jax/output/SVG/fonts/Gyre-Pagella": ['svgOutput'],
            "unpacked/jax/output/SVG/fonts/Gyre-Pagella": ['svgOutput','unpacked']
        }
    },
    "fontGyreTermes": {
        "description": "The Gyre-Termes font",
        "paths": {
            "fonts/HTML-CSS/Gyre-Termes/eot": ['htmlCssOutput','eot'],
            "fonts/HTML-CSS/Gyre-Termes/otf": ['htmlCssOutput','otf'],
            "fonts/HTML-CSS/Gyre-Termes/woff": ['htmlCssOutput','woff'],
            "jax/output/HTML-CSS/fonts/Gyre-Termes": ['htmlCssOutput'],
            "unpacked/jax/output/HTML-CSS/fonts/Gyre-Termes": ['htmlCssOutput','unpacked'],
            "jax/output/SVG/fonts/Gyre-Termes": ['svgOutput'],
            "unpacked/jax/output/SVG/fonts/Gyre-Termes": ['svgOutput','unpacked']
        }
    },
    "fontLatinModern": {
        "description": "The Latin Modern font",
        "paths": {
            "fonts/HTML-CSS/Latin-Modern/eot": ['htmlCssOutput','eot'],
            "fonts/HTML-CSS/Latin-Modern/otf": ['htmlCssOutput','otf'],
            "fonts/HTML-CSS/Latin-Modern/woff": ['htmlCssOutput','woff'],
            "jax/output/HTML-CSS/fonts/Latin-Modern": ['htmlCssOutput'],
            "unpacked/jax/output/HTML-CSS/fonts/Latin-Modern": ['htmlCssOutput','unpacked'],
            "jax/output/SVG/fonts/Latin-Modern": ['svgOutput'],
            "unpacked/jax/output/SVG/fonts/Latin-Modern": ['svgOutput','unpacked']
        }
    },
    "fontNeoEuler": {
        "description": "The Neo-Euler font",
        "paths": {
            "fonts/HTML-CSS/Neo-Euler/eot": ['htmlCssOutput','eot'],
            "fonts/HTML-CSS/Neo-Euler/otf": ['htmlCssOutput','otf'],
            "fonts/HTML-CSS/Neo-Euler/woff": ['htmlCssOutput','woff'],
            "jax/output/HTML-CSS/fonts/Neo-Euler": ['htmlCssOutput'],
            "unpacked/jax/output/HTML-CSS/fonts/Neo-Euler": ['htmlCssOutput','unpacked'],
            "jax/output/SVG/fonts/Neo-Euler": ['svgOutput'],
            "unpacked/jax/output/SVG/fonts/Neo-Euler": ['svgOutput','unpacked']
        }
    },
    "fontStix": {
        "description": "The STIX font",
        "paths": {
            "fonts/HTML-CSS/STIX": ['htmlCssOutput'],
            "jax/output/HTML-CSS/fonts/STIX": ['htmlCssOutput'],
            "unpacked/jax/output/HTML-CSS/fonts/STIX": ['htmlCssOutput','unpacked'],
            "jax/output/SVG/fonts/STIX": ['svgOutput'],
            "unpacked/jax/output/SVG/fonts/STIX": ['svgOutput','unpacked']
        }
    },
    "fontStixWeb": {
        "description": "The STIX-Web font",
        "paths": {
            "fonts/HTML-CSS/STIX-Web/eot": ['htmlCssOutput','eot'],
            "fonts/HTML-CSS/STIX-Web/otf": ['htmlCssOutput','otf'],
            "fonts/HTML-CSS/STIX-Web/woff": ['htmlCssOutput','woff'],
            "jax/output/HTML-CSS/fonts/STIX-Web": ['htmlCssOutput'],
            "unpacked/jax/output/HTML-CSS/fonts/STIX-Web": ['htmlCssOutput','unpacked'],
            "jax/output/SVG/fonts/STIX-Web": ['svgOutput'],
            "unpacked/jax/output/SVG/fonts/STIX-Web": ['svgOutput','unpacked']
        }
    },
    "fontTeX": {
        "description": "The TeX font",
        "paths": {
            "fonts/HTML-CSS/TeX/eot": ['htmlCssOutput','eot'],
            "fonts/HTML-CSS/TeX/otf": ['htmlCssOutput','otf'],
            "fonts/HTML-CSS/TeX/png": ['htmlCssOutput','png'],
            "fonts/HTML-CSS/TeX/svg": ['htmlCssOutput','svg'],
            "fonts/HTML-CSS/TeX/woff": ['htmlCssOutput','woff'],
            "jax/output/HTML-CSS/fonts/TeX": ['htmlCssOutput'],
            "unpacked/jax/output/HTML-CSS/fonts/TeX": ['htmlCssOutput','unpacked'],
            "jax/output/SVG/fonts/TeX": ['svgOutput'],
            "unpacked/jax/output/SVG/fonts/TeX": ['svgOutput','unpacked']
        }
    },
    "dropFonts": {
        "description": "All fonts",
        "paths": {
            "fonts": []
        }
    },
    "eot": {
        "description": "Fonts in .eot format",
        "paths": {
            "fonts/HTML-CSS/Asana-Math/eot": ['htmlCssOutput','fontAsana'],
            "fonts/HTML-CSS/Gyre-Pagella/eot": ['htmlCssOutput','fontGyrePagella'],
            "fonts/HTML-CSS/Gyre-Termes/eot": ['htmlCssOutput','fontGyreTermes'],
            "fonts/HTML-CSS/Latin-Modern/eot": ['htmlCssOutput','fontLatinModern'],
            "fonts/HTML-CSS/Neo-Euler/eot": ['htmlCssOutput','fontNeoEuler'],
            "fonts/HTML-CSS/STIX-Web/eot": ['htmlCssOutput','fontStixWeb'],
            "fonts/HTML-CSS/TeX/eot": ['htmlCssOutput','fontTeX'],
        }
    },
    "otf": {
        "description": "Fonts in .otf format",
        "paths": {
            "fonts/HTML-CSS/Asana-Math/otf": ['htmlCssOutput','fontAsana'],
            "fonts/HTML-CSS/Gyre-Pagella/otf": ['htmlCssOutput','fontGyrePagella'],
            "fonts/HTML-CSS/Gyre-Termes/otf": ['htmlCssOutput','fontGyreTermes'],
            "fonts/HTML-CSS/Latin-Modern/otf": ['htmlCssOutput','fontLatinModern'],
            "fonts/HTML-CSS/Neo-Euler/otf": ['htmlCssOutput','fontNeoEuler'],
            "fonts/HTML-CSS/STIX-Web/otf": ['htmlCssOutput','fontStixWeb'],
            "fonts/HTML-CSS/TeX/otf": ['htmlCssOutput','fontTeX'],
        }
    },
    "png": {
        "description": "Fonts in .png format",
        "paths": {
            "fonts/HTML-CSS/Asana-Math/png": ['htmlCssOutput','fontAsana'],
            "fonts/HTML-CSS/Gyre-Pagella/png": ['htmlCssOutput','fontGyrePagella'],
            "fonts/HTML-CSS/Gyre-Termes/png": ['htmlCssOutput','fontGyreTermes'],
            "fonts/HTML-CSS/Latin-Modern/png": ['htmlCssOutput','fontLatinModern'],
            "fonts/HTML-CSS/Neo-Euler/png": ['htmlCssOutput','fontNeoEuler'],
            "fonts/HTML-CSS/STIX-Web/png": ['htmlCssOutput','fontStixWeb'],
            "fonts/HTML-CSS/TeX/png": ['htmlCssOutput','fontTeX'],
        }
    },
    "svg": {
        "description": "Fonts in .svg format",
        "paths": {
            "fonts/HTML-CSS/Asana-Math/svg": ['htmlCssOutput','fontAsana'],
            "fonts/HTML-CSS/Gyre-Pagella/svg": ['htmlCssOutput','fontGyrePagella'],
            "fonts/HTML-CSS/Gyre-Termes/svg": ['htmlCssOutput','fontGyreTermes'],
            "fonts/HTML-CSS/Latin-Modern/svg": ['htmlCssOutput','fontLatinModern'],
            "fonts/HTML-CSS/Neo-Euler/svg": ['htmlCssOutput','fontNeoEuler'],
            "fonts/HTML-CSS/STIX-Web/svg": ['htmlCssOutput','fontStixWeb'],
            "fonts/HTML-CSS/TeX/svg": ['htmlCssOutput','fontTeX'],
        }
    },
    "woff": {
        "description": "Fonts in .woff format",
        "paths": {
            "fonts/HTML-CSS/Asana-Math/woff": ['htmlCssOutput','fontAsana'],
            "fonts/HTML-CSS/Gyre-Pagella/woff": ['htmlCssOutput','fontGyrePagella'],
            "fonts/HTML-CSS/Gyre-Termes/woff": ['htmlCssOutput','fontGyreTermes'],
            "fonts/HTML-CSS/Latin-Modern/woff": ['htmlCssOutput','fontLatinModern'],
            "fonts/HTML-CSS/Neo-Euler/woff": ['htmlCssOutput','fontNeoEuler'],
            "fonts/HTML-CSS/STIX-Web/woff": ['htmlCssOutput','fontStixWeb'],
            "fonts/HTML-CSS/TeX/woff": ['htmlCssOutput','fontTeX'],
        }
    },
    "asciimathInput": {
        "description": "The AsciiMath input",
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
        "description": "The MathML input",
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
        "description": "The TeX input",
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
        "description": "The AsciiMath extension",
        "paths": {
            "extensions/asciimath2jax.js": ['asciimathInput'],
            "unpacked/extensions/asciimath2jax.js": ['asciimathInput','unpacked']
        }
    },
    "extensionsMathml": {
        "description": "All MathML extensions",
        "paths": {
            "extensions/MathML": ['mathmlInput'],
            "extensions/mml2jax.js": ['mathmlInput'],
            "unpacked/extensions/MathML": ['unpacked','mathmlInput'],
            "unpacked/extensions/mml2jax.js": ['unpacked','mathmlInput']
        }
    },
    "extensionsTeX": {
        "description": "All TeX extensions",
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
    "htmlCssOutput": {
        "description": "The HTML-CSS output",
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

            "jax/output/HTML-CSS": [],
            "unpacked/jax/output/HTML-CSS": ['unpacked']
        }
    },
    "mathmlOutput": {
        "description": "The MathML output",
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
        "description": "The SVG output",
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

            "jax/output/SVG": [],
            "unpacked/jax/output/SVG": ['unpacked']
        }
    },
    "commonHtmlOutput": {
        "description": "The Common HTML output",
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

            "jax/output/CommonHTML": [],
            "unpacked/jax/output/CommonHTML": ['unpacked'],
            "extensions/CHTML-preview.js": [],
            "unpacked/extensions/CHTML-preview.js": ['unpacked']
        }
    },
    "previewHtmlOutput": {
        "description": "The preview HTML output",
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
        "description": "The plain source output",
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
        "paths": {
            ".gitignore": [],
            "docs": [],
            "test": [],
            "CONTRIBUTING.md": [],
            "README-branch.txt": [],
            "README.md": [],
            "bower.json": [],
            "composer.json": [],
            ".npmignore": [],
            "package.json": [],
            "LICENSE": []
        }
    }
}
