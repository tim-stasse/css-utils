// WebKit-style focus

export function tabFocus() {
  return `
    /* WebKit-specific. Other browsers will keep their default outline style. */
    /* (Initially tried to also force default via 'outline: initial', */
    /* but that seems to erroneously remove the outline in Firefox altogether.) */
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
  `;
}

export default {
  tabFocus,
};
