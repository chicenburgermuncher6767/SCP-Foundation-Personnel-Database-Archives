FOUNDATION ARCHIVE V4 separate-page build

This version changes the front website into a database:

PAGE 1
------
Memetic/cognitohazard warning + 10 second countdown + fictional clearance.

PAGE 2
------
Category selection:
1. MTF / Security
2. Department
3. Friendly Group of Interest
4. Neutral Group of Interest
5. Hostile Group of Interest / Class-D

PAGE 3
------
The selected category becomes its own database directory.
The same page template is reused for all five categories.

Under the official directory is a separate LOCAL ARCHIVE section.
This is where your own OCs go.

IMPORTANT SCP WIKI NOTE
-----------------------
The SCP Wiki has official pages for Mobile Task Forces, Foundation
Departments, and Groups of Interest.

The Wiki does NOT use one universal "friendly / neutral / hostile"
classification for every GoI. Those three categories are therefore
a classification system for THIS archive.

The official links are included so visitors can access the current
SCP Wiki indexes.

"EVERY GROUP"
-------------
The SCP Wiki's own resource hub calls its GoI list
"A Semi-Comprehensive List of Groups of Interest", and its MTF
resource is called "A Comprehensive List of Mobile Task Forces".

Because these lists can change and the GoI page itself warns that
portrayals can vary, this website deliberately links to the official
indexes rather than pretending a copied static list will stay complete.

The script contains a starter set of individual records for navigation.
The OFFICIAL DIRECTORY button is the authoritative live index.

ADDING YOUR OCs
---------------
Open script.js and find:

myOCs: {
  mtf: [],
  department: [],
  friendly: [],
  neutral: [],
  hostile: []
}

Example:

friendly: [
  {
    name: "MY FOUNDATION CHARACTER",
    type: "PERSONNEL",
    description: "My OC associated with this group.",
    url: "https://docs.google.com/document/d/YOUR-ID/edit"
  }
]

Put each OC in the category you want.

REAL DOCUMENT SECURITY
----------------------
The clearance code is theatrical. It is NOT real security.

Google Docs sharing permissions control whether people can actually
open the linked documents.

HOSTING
-------
Upload:
index.html
style.css
script.js

to GitHub Pages, Cloudflare Pages, Netlify, etc.

No server is required.


PAGE STRUCTURE
index.html = warning/clearance page
categories.html = category selection page
database.html = category database page; category is selected by URL query

The clearance gate uses sessionStorage, so visitors who bypass the first page are redirected back to it.
