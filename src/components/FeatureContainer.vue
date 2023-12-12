<template>
  <h4 class="bold">Features</h4>
  <div class="feature-container">
    <img
      class="feature-img"
      :src="`library-page-${$q.dark.isActive ? 'dark' : 'light'}.png`"
      alt="library-page.png"
    />
    <div class="feature-desc column">
      <div class="feature-title">Reference Management</div>
      <div class="feature-description">
        Manage your references and corresponding notes in one place. Seting
        favorites, modifying meta infomation of a reference, managing tags,
        searching for references... All esential functionalities are here.
      </div>
    </div>
  </div>

  <div class="feature-container-reversed">
    <div class="feature-desc column">
      <div class="feature-title">Built-in PDF Reader</div>
      <div class="feature-description">
        PDF reader comes with an internal link peeker, no need to flip back and
        forward to read figures, tables and formulas now. Of course, PDF reader
        supports annotations, and LaTeX is supported in the annotaiton. Perfect
        for STEM researchers.
      </div>
    </div>
    <img
      class="feature-img"
      :src="`reader-page-${$q.dark.isActive ? 'dark' : 'light'}.png`"
      alt="reader-page.png"
    />
  </div>

  <div class="feature-container">
    <img
      class="feature-img"
      :src="`note-page-${$q.dark.isActive ? 'dark' : 'light'}.png`"
      alt="note-page.png"
    />
    <div class="feature-desc column">
      <div class="feature-title">WYSIWYG Markdown Editor</div>
      <div class="feature-description">
        Live Markdown is the most elegant way to take notes. Together with the
        power of internal link, you could build your own knowledge network.
      </div>
    </div>
  </div>

  <div class="feature-container-reversed">
    <div class="feature-desc column">
      <div class="feature-title">Excalidraw Integrated</div>
      <div class="feature-description">
        Free your mind using the canvas without border. Perfect for people who
        like to write and / or draw things with pen.
      </div>
    </div>
    <img
      class="feature-img"
      :src="`excalidraw-page-${$q.dark.isActive ? 'dark' : 'light'}.png`"
      alt="excalidraw-page.png"
    />
  </div>
</template>
