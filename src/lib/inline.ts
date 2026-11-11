// Minimal inline formatting for frontmatter text: *text* renders as italics.
const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** HTML for display: escapes the text, then turns *text* into <em>text</em>. */
export const inlineHtml = (s: string) => escape(s).replace(/\*([^*]+)\*/g, '<em>$1</em>');

/** Plain text for meta tags: drops the asterisks. */
export const plainText = (s: string) => s.replace(/\*([^*]+)\*/g, '$1');
