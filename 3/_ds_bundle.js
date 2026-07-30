/* @ds-bundle: {"format":4,"namespace":"ZingDesignSystem_3ec979","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"ServiceRow","sourcePath":"components/data-display/ServiceRow.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"SegmentedControl","sourcePath":"components/navigation/SegmentedControl.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"ef923a97c51c","components/buttons/IconButton.jsx":"253d995977ef","components/data-display/Avatar.jsx":"87d21b44370b","components/data-display/Card.jsx":"e615211abf62","components/data-display/ServiceRow.jsx":"975c3be44502","components/feedback/Badge.jsx":"6ba74e61b9b0","components/feedback/Dialog.jsx":"e3d364b2461a","components/feedback/Tag.jsx":"17e2bd3c2fc3","components/feedback/Toast.jsx":"8886c56efcb4","components/forms/Checkbox.jsx":"d57c422ba956","components/forms/Input.jsx":"f6b445d92363","components/forms/Radio.jsx":"0d56fb216757","components/forms/Select.jsx":"1f4da350801b","components/forms/Switch.jsx":"f986ab629836","components/forms/Textarea.jsx":"940badf1a191","components/navigation/SegmentedControl.jsx":"27441a635920","components/navigation/Tabs.jsx":"c4721f5095ea","export/zing-investor-deck/templates/investor-deck/deck-stage.js":"94b80df773e6","export/zing-investor-deck/templates/investor-deck/ds-base.js":"21f9a203b42d","export/zing-investor-deck/templates/investor-deck/image-slot.js":"0394ad34f685","export/zing-investor-deck/ui_kits/resident-scheduling/app.jsx":"f2f5a7ae76b7","export/zing-investor-deck/ui_kits/resident-scheduling/components.jsx":"df9837b8557d","export/zing-investor-deck/ui_kits/resident-scheduling/data.jsx":"50e0b40fdbb6","export/zing-resident-app/app.jsx":"46da32ac8727","export/zing-resident-app/components.jsx":"df9837b8557d","export/zing-resident-app/data.jsx":"50e0b40fdbb6","export/zing-resident-app/onboarding.jsx":"08068151cbf0","ui_kits/resident-app/app.jsx":"e815c297ae70","ui_kits/resident-scheduling/app.jsx":"46da32ac8727","ui_kits/resident-scheduling/components.jsx":"df9837b8557d","ui_kits/resident-scheduling/data.jsx":"50e0b40fdbb6","ui_kits/resident-scheduling/onboarding.jsx":"08068151cbf0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ZingDesignSystem_3ec979 = window.ZingDesignSystem_3ec979 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Zing Button — pill-shaped, calm, hospitality-grade.
 * Primary action uses the deep forest; secondary uses sage.
 */
function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  icon = null,
  iconTrailing = null,
  type = 'button',
  className = '',
  children,
  ...rest
}) {
  const classes = ['zg-btn', `zg-btn--${variant}`, size !== 'md' ? `zg-btn--${size}` : '', block ? 'zg-btn--block' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: classes
  }, rest), icon, children && /*#__PURE__*/React.createElement("span", null, children), iconTrailing);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Zing IconButton — a circular button for single-glyph actions.
 * Pass an SVG icon as children.
 */
function IconButton({
  variant = 'ghost',
  size = 'md',
  label,
  className = '',
  children,
  ...rest
}) {
  const classes = ['zg-btn', 'zg-btn--icon', `zg-btn--${variant}`, size !== 'md' ? `zg-btn--${size}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    className: classes
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Zing avatar — image or initials, sage by default. */
function Avatar({
  src,
  name = '',
  size = 'md',
  className = '',
  ...rest
}) {
  const initials = name.split(' ').map(p => p[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  const classes = ['zg-avatar', size !== 'md' ? `zg-avatar--${size}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classes
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Zing surface card. Optional media (image src) at top. */
function Card({
  variant = 'default',
  media,
  mediaAlt = '',
  interactive = false,
  className = '',
  children,
  ...rest
}) {
  const classes = ['zg-card', variant !== 'default' ? `zg-card--${variant}` : '', interactive ? 'zg-card--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, rest), media && /*#__PURE__*/React.createElement("img", {
    className: "zg-card__media",
    src: media,
    alt: mediaAlt
  }), /*#__PURE__*/React.createElement("div", {
    className: "zg-card__body"
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/ServiceRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Zing service / order row — an icon, a title + subtitle, and trailing meta.
 * The backbone of the resident menu and order summaries.
 */
function ServiceRow({
  icon,
  title,
  subtitle,
  meta,
  interactive = false,
  className = '',
  ...rest
}) {
  const classes = ['zg-row', interactive ? 'zg-row--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, rest), icon && /*#__PURE__*/React.createElement("div", {
    className: "zg-row__icon"
  }, icon), /*#__PURE__*/React.createElement("div", {
    className: "zg-row__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "zg-row__title"
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    className: "zg-row__sub"
  }, subtitle)), meta != null && /*#__PURE__*/React.createElement("div", {
    className: "zg-row__meta"
  }, meta));
}
Object.assign(__ds_scope, { ServiceRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/ServiceRow.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
/** Zing status badge — small, uppercase, calm. */
function Badge({
  tone = 'sage',
  dot = false,
  className = '',
  children
}) {
  const toneClass = tone === 'sage' ? '' : `zg-badge--${tone}`;
  return /*#__PURE__*/React.createElement("span", {
    className: ['zg-badge', toneClass, className].filter(Boolean).join(' ')
  }, dot && /*#__PURE__*/React.createElement("span", {
    className: "zg-dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/**
 * Zing dialog — a soft, rounded modal for confirmations.
 * Renders nothing when `open` is false.
 */
function Dialog({
  open = true,
  title,
  onClose,
  actions,
  className = '',
  children
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "zg-scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: ['zg-dialog', className].filter(Boolean).join(' '),
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation()
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "zg-dialog__title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "zg-dialog__body"
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    className: "zg-dialog__actions"
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Zing tag / chip — for filters and selections. Optionally removable or selectable. */
function Tag({
  selected = false,
  onRemove,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['zg-tag', selected ? 'zg-tag--selected' : '', className].filter(Boolean).join(' ')
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: onRemove
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const icons = {
  check: /*#__PURE__*/React.createElement("path", {
    d: "M5 12l5 5L20 7"
  }),
  bell: /*#__PURE__*/React.createElement("path", {
    d: "M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"
  }),
  sparkle: /*#__PURE__*/React.createElement("path", {
    d: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"
  })
};

/** Zing toast — a quiet confirmation on deep forest. */
function Toast({
  icon = 'check',
  accent = false,
  className = '',
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['zg-toast', accent ? 'zg-toast--accent' : '', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("span", {
    className: "zg-toast__icon"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, icons[icon] || icons.check)), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Check = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "3",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12l5 5L20 7"
}));

/** Zing checkbox with label. */
function Checkbox({
  label,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['zg-check', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "zg-check__box"
  }, /*#__PURE__*/React.createElement(Check, null)), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Zing text input with optional label, hint and error state. */
function Input({
  label,
  hint,
  error,
  id,
  className = '',
  ...rest
}) {
  const inputId = id || (label ? `zg-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: "zg-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "zg-label",
    htmlFor: inputId
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: ['zg-input', error ? 'zg-input--invalid' : '', className].filter(Boolean).join(' '),
    "aria-invalid": error ? true : undefined
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    className: ['zg-hint', error ? 'zg-hint--error' : ''].filter(Boolean).join(' ')
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Zing radio with label. Group by sharing the same `name`. */
function Radio({
  label,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['zg-check', 'zg-check--radio', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "zg-check__box"
  }), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Zing select dropdown. Pass <option>s as children, or an `options` array. */
function Select({
  label,
  hint,
  options,
  id,
  className = '',
  children,
  ...rest
}) {
  const inputId = id || (label ? `zg-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: "zg-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "zg-label",
    htmlFor: inputId
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    id: inputId,
    className: ['zg-select', className].filter(Boolean).join(' ')
  }, rest), options ? options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const text = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  }) : children), hint && /*#__PURE__*/React.createElement("span", {
    className: "zg-hint"
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Zing toggle switch. Sage when on. */
function Switch({
  label,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['zg-switch', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "zg-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "zg-switch__thumb"
  })), label && /*#__PURE__*/React.createElement("span", {
    className: "zg-label",
    style: {
      cursor: 'pointer'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Zing multi-line text area with optional label and hint. */
function Textarea({
  label,
  hint,
  id,
  className = '',
  ...rest
}) {
  const inputId = id || (label ? `zg-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: "zg-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "zg-label",
    htmlFor: inputId
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    className: ['zg-textarea', className].filter(Boolean).join(' ')
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    className: "zg-hint"
  }, hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SegmentedControl.jsx
try { (() => {
/** Zing segmented control — a pill toggle for 2–3 short options. */
function SegmentedControl({
  items = [],
  value,
  defaultValue,
  onChange,
  className = ''
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? items[0]?.value);
  const active = value !== undefined ? value : internal;
  const select = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: ['zg-segment', className].filter(Boolean).join(' '),
    role: "tablist"
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.value,
    role: "tab",
    "aria-selected": active === it.value,
    onClick: () => select(it.value)
  }, it.label)));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Zing underline tabs. Controlled via `value` + `onChange`, or uncontrolled. */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  className = ''
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? items[0]?.value);
  const active = value !== undefined ? value : internal;
  const select = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: ['zg-tabs', className].filter(Boolean).join(' '),
    role: "tablist"
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.value,
    role: "tab",
    "aria-selected": active === it.value,
    className: ['zg-tab', active === it.value ? 'zg-tab--active' : ''].filter(Boolean).join(' '),
    onClick: () => select(it.value)
  }, it.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// export/zing-investor-deck/templates/investor-deck/deck-stage.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* ═══ THIS PROJECT USES DESIGN COMPONENTS (.dc.html) ═══
 * Reference this stage from your <x-dc> template as an import — NEVER as a
 * raw <deck-stage> tag plus a <script src> (that hides the whole deck until
 * the stream finishes):
 *
 *   <x-import component-from-global-scope="deck-stage" from="./deck-stage.js"
 *             width="1920" height="1080" hint-size="100%,100%">
 *     <section data-label="Title" style="...">…</section>
 *     <section data-label="Agenda" style="...">…</section>
 *   </x-import>
 *
 * Slides are inline-styled <section> siblings; do not add a stylesheet or a
 * deck-stage:not(:defined) rule. The plain-HTML "Usage" block in the comment
 * below does NOT apply to .dc.html templates.
 */
/* BEGIN USAGE */
/**
 * <deck-stage> — reusable web component for HTML decks.
 *
 * Handles:
 *  (a) speaker notes — reads <script type="application/json" id="speaker-notes">
 *      and posts {slideIndexChanged: N} to the parent window on nav.
 *  (b) keyboard navigation — ←/→, PgUp/PgDn, Space, Home/End, number keys.
 *      On touch devices, tapping the left/right half of the stage goes
 *      prev/next — taps on links, buttons and other interactive slide
 *      content are left alone.
 *  (c) press R to reset to slide 0 (with a tasteful keyboard hint).
 *  (d) bottom-center overlay showing slide count + hints, fades out on idle.
 *  (e) auto-scaling — inner canvas is a fixed design size (default 1920×1080)
 *      scaled with `transform: scale()` to fit the viewport, letterboxed.
 *      Set the `noscale` attribute to render at authored size (1:1) — the
 *      PPTX exporter sets this so its DOM capture sees unscaled geometry.
 *  (f) print — `@media print` lays every slide out as its own page at the
 *      design size, so the browser's Print → Save as PDF produces a clean
 *      one-page-per-slide PDF with no extra setup.
 *  (g) thumbnail rail — resizable left-hand column of per-slide thumbnails
 *      (static clones). Click to navigate — the clicked slide becomes the
 *      selected (highlighted) slide; shift-click selects a range and
 *      cmd/ctrl-click toggles slides in and out of the selection
 *      (Escape collapses it back to the current slide); ↑/↓ with a
 *      thumbnail focused to step between slides; Delete/Backspace with a
 *      thumbnail focused to delete the selection (one confirm dialog,
 *      one undoable operation); drag to reorder (dragging collapses a
 *      multi-selection); right-click for
 *      Skip / Move up / Move down / Duplicate / Delete — over a
 *      multi-selection the menu offers "Delete N slides". Drag the rail's right edge to resize;
 *      width persists to
 *      localStorage. Skipped slides carry `data-deck-skip`, are dimmed in
 *      the rail, omitted from prev/next navigation, and hidden at print.
 *      The rail is suppressed in presenting mode, in the host's Preview
 *      mode (ViewerMode='none'), on `noscale`, on narrow viewports
 *      (≤640px), and via the `no-rail` attribute. Rail mutations dispatch
 *      a `dc-op` CustomEvent on the element (see docs/dc-ops.md) and do
 *      NOT touch the DOM: the host applies the op and re-renders;
 *      structural rail input is locked until the host posts
 *      {__dc_op_ack: true, applied}.
 *  (h) typographic defaults — a zero-specificity stylesheet injected into
 *      the document gives headings `text-wrap: balance` and body text
 *      (p, li, blockquote, figcaption) `text-wrap: pretty`, so slides
 *      avoid widowed/orphaned words by default. Any text-wrap declaration
 *      you author on those elements wins over these defaults.
 *
 * Slides are HIDDEN, not unmounted. Non-active slides stay in the DOM with
 * `visibility: hidden` + `opacity: 0`, so their state (videos, iframes,
 * form inputs, React trees) is preserved across navigation.
 *
 * Lifecycle event — the component dispatches a `slidechange` CustomEvent on
 * itself whenever the active slide changes (including the initial mount).
 * The event bubbles and composes out of shadow DOM, so you can listen on
 * the <deck-stage> element or on document:
 *
 *   document.querySelector('deck-stage').addEventListener('slidechange', (e) => {
 *     e.detail.index         // new 0-based index
 *     e.detail.previousIndex // previous index, or -1 on init
 *     e.detail.total         // total slide count
 *     e.detail.slide         // the new active slide element
 *     e.detail.previousSlide // the prior slide element, or null on init
 *     e.detail.reason        // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
 *   });
 *
 * Persistence: none at the deck level. The host app keeps the current slide
 * in its own URL (?slide=) and re-delivers it via location.hash on load, so a
 * bare load with no hash always starts at slide 1.
 *
 * Usage:
 *   <style>deck-stage:not(:defined){visibility:hidden}</style>
 *   <deck-stage width="1920" height="1080">
 *     <section data-label="Title">...</section>
 *     <section data-label="Agenda">...</section>
 *   </deck-stage>
 *   <script src="deck-stage.js"></script>
 *
 * The :not(:defined) rule prevents a flash of the first slide at its
 * authored styles before this script runs and attaches the shadow root.
 *
 * Slides are the direct element children of <deck-stage>. Each slide is
 * automatically tagged with:
 *   - data-screen-label="NN Label"   (1-indexed, for comment flow)
 *   - data-om-validate="no_overflowing_text,no_overlapping_text,slide_sized_text"
 *
 * Speaker notes stay in sync because the component posts {slideIndexChanged: N}
 * to the parent — just include the #speaker-notes script tag if asked for notes.
 *
 * Authoring guidance:
 *   - Write slide bodies as static HTML inside <deck-stage>, with sizing via
 *     CSS custom properties in a <style> block rather than JS constants.
 *     Static slide markup is what lets the user click a heading in edit mode
 *     and retype it directly; a slide rendered through <script type="text/babel">,
 *     React, or a loop over a JS array has to round-trip every tweak through a
 *     chat message instead. Reach for script-generated slides only when the
 *     content genuinely needs interactive behaviour static HTML can't express.
 *   - Do NOT set position/inset/width/height on the slide <section> elements —
 *     the component absolutely positions every slotted child for you.
 *   - Entrance animations: make the visible end-state the base style and
 *     animate *from* hidden, so print and reduced-motion show content.
 *     Gate the animation on [data-deck-active] and the motion query, e.g.
 *     `@media (prefers-reduced-motion:no-preference){ [data-deck-active] .x{animation:fade-in .5s both} }`.
 *     Avoid infinite decorative loops on slide content.
 */
/* END USAGE */

(() => {
  const DESIGN_W_DEFAULT = 1920;
  const DESIGN_H_DEFAULT = 1080;
  const OVERLAY_HIDE_MS = 1800;
  const VALIDATE_ATTR = 'no_overflowing_text,no_overlapping_text,slide_sized_text';
  const FINE_POINTER_MQ = matchMedia('(hover: hover) and (pointer: fine)');
  const NARROW_MQ = matchMedia('(max-width: 640px)');
  // Slide-authored controls that should keep a tap instead of it navigating.
  const INTERACTIVE_SEL = 'a[href], button, input, select, textarea, summary, label, video[controls], audio[controls], [role="button"], [onclick], [tabindex]:not([tabindex^="-"]), [contenteditable]:not([contenteditable="false" i])';
  const pad2 = n => String(n).padStart(2, '0');

  // Label precedence: data-label → data-screen-label (number stripped) → first heading → "Slide".
  const getSlideLabel = el => {
    const explicit = el.getAttribute('data-label');
    if (explicit) return explicit;
    const existing = el.getAttribute('data-screen-label');
    if (existing) return existing.replace(/^\s*\d+\s*/, '').trim() || existing;
    const h = el.querySelector('h1, h2, h3, [data-title]');
    const t = h && (h.textContent || '').trim().slice(0, 40);
    if (t) return t;
    return 'Slide';
  };
  const stylesheet = `
    :host {
      position: fixed;
      inset: 0;
      display: block;
      background: #000;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
      overflow: hidden;
      -webkit-tap-highlight-color: transparent;
    }
    /* connectedCallback holds this until document.fonts.ready (capped 2s) so
     * the first visible paint has the deck's real typography + final rail
     * layout. opacity (not visibility) so the active slide can't un-hide
     * itself via the ::slotted([data-deck-active]) visibility:visible rule.
     * Only the stage/rail hide — the black :host background stays, so the
     * iframe doesn't flash the page's default white. */
    :host([data-fonts-pending]) .stage,
    :host([data-fonts-pending]) .rail { opacity: 0; pointer-events: none; }

    .stage {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .canvas {
      position: relative;
      transform-origin: center center;
      flex-shrink: 0;
      background: #fff;
      will-change: transform;
    }

    /* Slides live in light DOM (via <slot>) so authored CSS still applies.
       We absolutely position each slotted child to stack them. */
    ::slotted(*) {
      position: absolute !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      box-sizing: border-box !important;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
    ::slotted([data-deck-active]) {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }

    .overlay {
      position: fixed;
      left: 50%;
      bottom: 22px;
      transform: translate(-50%, 6px) scale(0.92);
      filter: blur(6px);
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px;
      background: #000;
      color: #fff;
      border-radius: 999px;
      font-size: 12px;
      font-feature-settings: "tnum" 1;
      letter-spacing: 0.01em;
      opacity: 0;
      pointer-events: none;
      transition: opacity 260ms ease, transform 260ms cubic-bezier(.2,.8,.2,1), filter 260ms ease;
      transform-origin: center bottom;
      z-index: 2147483000;
      user-select: none;
    }
    .overlay[data-visible] {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, 0) scale(1);
      filter: blur(0);
    }

    .btn {
      appearance: none;
      -webkit-appearance: none;
      background: transparent;
      border: 0;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      cursor: default;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 28px;
      min-width: 28px;
      border-radius: 999px;
      color: rgba(255,255,255,0.72);
      transition: background 140ms ease, color 140ms ease;
      -webkit-tap-highlight-color: transparent;
    }
    .btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .btn:active { background: rgba(255,255,255,0.18); }
    .btn:focus { outline: none; }
    .btn:focus-visible { outline: none; }
    .btn::-moz-focus-inner { border: 0; }
    .btn svg { width: 14px; height: 14px; display: block; }
    .btn.reset {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.02em;
      padding: 0 10px 0 12px;
      gap: 6px;
      color: rgba(255,255,255,0.72);
    }
    .btn.reset .kbd {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 10px;
      line-height: 1;
      color: rgba(255,255,255,0.88);
      background: rgba(255,255,255,0.12);
      border-radius: 4px;
    }

    .count {
      font-variant-numeric: tabular-nums;
      color: #fff;
      font-weight: 500;
      padding: 0 8px;
      min-width: 42px;
      text-align: center;
      font-size: 12px;
    }
    .count .sep { color: rgba(255,255,255,0.45); margin: 0 3px; font-weight: 400; }
    .count .total { color: rgba(255,255,255,0.55); }

    .divider {
      width: 1px;
      height: 14px;
      background: rgba(255,255,255,0.18);
      margin: 0 2px;
    }

    /* ── Thumbnail rail ──────────────────────────────────────────────────
       Fixed column on the left; each thumbnail is a static deep-clone of
       the light-DOM slide scaled into a 16:9 (or design-aspect) frame. The
       stage re-fits around it (see _fit); hidden during present / noscale
       / print so capture geometry and fullscreen output are unchanged. */
    .rail {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      width: var(--deck-rail-w, 188px);
      background: #141414;
      border-right: 1px solid rgba(255,255,255,0.08);
      overflow-y: auto;
      overflow-x: hidden;
      padding: 12px 10px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 12px;
      z-index: 2147482500;
      scrollbar-width: thin;
      scrollbar-color: rgba(255,255,255,0.18) transparent;
    }
    .rail::-webkit-scrollbar { width: 8px; }
    .rail::-webkit-scrollbar-track { background: transparent; margin: 2px; }
    .rail::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.18);
      border-radius: 4px;
      border: 2px solid transparent;
      background-clip: content-box;
    }
    .rail::-webkit-scrollbar-thumb:hover {
      background: rgba(255,255,255,0.28);
      border: 2px solid transparent;
      background-clip: content-box;
    }
    :host([no-rail]) .rail,
    :host([noscale]) .rail { display: none; }
    .rail[data-presenting] { display: none; }
    @media (max-width: 640px) {
      .rail, .rail-resize { display: none; }
    }
    /* User-driven show/hide (the TweaksPanel toggle) slides instead of
       popping. Transitions are gated on :host([data-rail-anim]) — set only
       for the 200ms around the toggle — so window-resize and rail-width
       drag (which also call _fit) don't lag behind the cursor. */
    .rail[data-user-hidden] { transform: translateX(-100%); }
    :host([data-rail-anim]) .rail { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .stage { transition: left 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .canvas { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    /* transition shorthand replaces rather than merges — repeat the base
       .overlay opacity/transform/filter transitions so visibility changes
       during the 200ms toggle window still fade instead of popping. */
    :host([data-rail-anim]) .overlay {
      transition: margin-left 200ms cubic-bezier(.3,.7,.4,1),
                  opacity 260ms ease,
                  transform 260ms cubic-bezier(.2,.8,.2,1),
                  filter 260ms ease;
    }

    .thumb {
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: 8px;
      cursor: pointer;
      user-select: none;
    }
    .thumb .num {
      width: 16px;
      flex-shrink: 0;
      font-size: 11px;
      font-weight: 500;
      text-align: right;
      color: rgba(255,255,255,0.55);
      padding-top: 2px;
      font-variant-numeric: tabular-nums;
    }
    .thumb .frame {
      position: relative;
      flex: 1;
      min-width: 0;
      aspect-ratio: var(--deck-aspect);
      background: #fff;
      border-radius: 4px;
      outline: 2px solid transparent;
      outline-offset: 0;
      overflow: hidden;
      transition: outline-color 120ms ease;
    }
    .thumb:hover .frame { outline-color: rgba(255,255,255,0.25); }
    .thumb { outline: none; }
    .thumb:focus-visible .frame { outline-color: rgba(255,255,255,0.5); }
    .thumb[data-selected] .num { color: #fff; }
    .thumb[data-selected] .frame {
      outline-color: rgba(217,119,87,0.65);
      box-shadow: 0 0 0 4px rgba(217,119,87,0.18);
    }
    .thumb[data-current] .num { color: #fff; }
    .thumb[data-current] .frame {
      outline-color: #D97757;
      box-shadow: 0 0 0 4px rgba(217,119,87,0.25);
    }
    .thumb[data-dragging] { opacity: 0.35; }
    .thumb::before {
      content: '';
      position: absolute;
      left: 24px;
      right: 0;
      height: 3px;
      border-radius: 2px;
      background: #D97757;
      opacity: 0;
      pointer-events: none;
    }
    .thumb[data-drop="before"]::before { top: -8px; opacity: 1; }
    .thumb[data-drop="after"]::before { bottom: -8px; opacity: 1; }
    .thumb[data-skip] .frame { opacity: 0.35; }
    .thumb[data-skip] .frame::after {
      content: 'Skipped';
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.45);
      color: #fff;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.04em;
    }

    .ctxmenu {
      position: fixed;
      min-width: 150px;
      padding: 4px;
      background: #242424;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 7px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.45);
      z-index: 2147483100;
      display: none;
      font-size: 12px;
    }
    .ctxmenu[data-open] { display: block; }
    .ctxmenu button {
      display: block;
      width: 100%;
      appearance: none;
      border: 0;
      background: transparent;
      color: #e8e8e8;
      font: inherit;
      text-align: left;
      padding: 6px 10px;
      border-radius: 4px;
      cursor: pointer;
    }
    .ctxmenu button:hover:not(:disabled) { background: rgba(255,255,255,0.08); }
    .ctxmenu button:disabled { opacity: 0.35; cursor: default; }
    .ctxmenu hr {
      border: 0;
      border-top: 1px solid rgba(255,255,255,0.1);
      margin: 4px 2px;
    }

    .rail-resize {
      position: fixed;
      left: calc(var(--deck-rail-w, 188px) - 3px);
      top: 0;
      bottom: 0;
      width: 6px;
      cursor: col-resize;
      z-index: 2147482600;
      touch-action: none;
    }
    .rail-resize:hover,
    .rail-resize[data-dragging] { background: rgba(255,255,255,0.12); }
    :host([no-rail]) .rail-resize,
    :host([noscale]) .rail-resize,
    .rail[data-presenting] + .rail-resize,
    .rail[data-user-hidden] + .rail-resize { display: none; }

    /* Delete-confirm popup — matches the SPA's ConfirmDialog layout
       (title + message body, depressed footer with Cancel / Delete). */
    .confirm-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.45);
      z-index: 2147483200;
      display: none;
      align-items: center;
      justify-content: center;
    }
    .confirm-backdrop[data-open] { display: flex; }
    .confirm {
      width: 320px;
      max-width: calc(100vw - 32px);
      background: #2a2a2a;
      color: #e8e8e8;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 12px;
      box-shadow: 0 12px 32px rgba(0,0,0,0.5);
      overflow: hidden;
      font-family: inherit;
      animation: deck-confirm-in 0.18s ease;
    }
    @keyframes deck-confirm-in {
      from { opacity: 0; transform: scale(0.96); }
      to { opacity: 1; transform: scale(1); }
    }
    .confirm .body { padding: 20px 20px 16px; }
    .confirm .title { font-size: 14px; font-weight: 600; margin-bottom: 4px; }
    .confirm .msg { font-size: 13px; line-height: 1.5; color: rgba(255,255,255,0.65); }
    .confirm .footer {
      padding: 14px 20px;
      background: #1f1f1f;
      border-top: 1px solid rgba(255,255,255,0.08);
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
    .confirm button {
      appearance: none;
      font: inherit;
      font-size: 13px;
      font-weight: 500;
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
    }
    .confirm .cancel {
      background: transparent;
      border: 0;
      color: rgba(255,255,255,0.8);
    }
    .confirm .cancel:hover { background: rgba(255,255,255,0.08); }
    .confirm .danger {
      background: #c96442;
      border: 1px solid rgba(0,0,0,0.15);
      color: #fff;
      box-shadow: 0 1px 3px rgba(166,50,68,0.3), 0 2px 6px rgba(166,50,68,0.18);
    }
    .confirm .danger:hover { background: #b5563a; }

    /* ── Print: one page per slide, no chrome ────────────────────────────
       The screen layout stacks every slide at inset:0 inside a scaled
       canvas; for print we want them in document flow at the authored
       design size so the browser paginates one slide per sheet. The
       @page size is set from the width/height attributes via the inline
       <style id="deck-stage-print-page"> that _syncPrintPageRule appends
       to the document (the @page at-rule has no effect inside shadow DOM). */
    @media print {
      :host {
        position: static;
        inset: auto;
        background: none;
        overflow: visible;
        color: inherit;
      }
      .stage { position: static; display: block; }
      .canvas {
        transform: none !important;
        width: auto !important;
        height: auto !important;
        background: none;
        will-change: auto;
      }
      ::slotted(*) {
        position: relative !important;
        inset: auto !important;
        width: var(--deck-design-w) !important;
        height: var(--deck-design-h) !important;
        box-sizing: border-box !important;
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto;
        break-after: page;
        page-break-after: always;
        break-inside: avoid;
        overflow: hidden;
      }
      /* :last-child alone isn't enough once data-deck-skip hides the
         trailing slide(s) — the last *visible* slide still carries
         break-after:page and prints a blank sheet. _markLastVisible()
         maintains data-deck-last-visible on the last non-skipped slide. */
      ::slotted(*:last-child),
      ::slotted([data-deck-last-visible]) {
        break-after: auto;
        page-break-after: auto;
      }
      ::slotted([data-deck-skip]) { display: none !important; }
      .overlay, .rail, .rail-resize, .ctxmenu, .confirm-backdrop { display: none !important; }
    }
  `;
  class DeckStage extends HTMLElement {
    static get observedAttributes() {
      return ['width', 'height', 'noscale', 'no-rail'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._index = 0;
      this._slides = [];
      // Explicit multi-selection (slide elements). Empty means the
      // selection is implicitly the current slide, so Delete always has
      // a well-defined target while the rail has focus.
      this._selected = new Set();
      this._selAnchor = null;
      this._notes = [];
      this._hideTimer = null;
      this._mouseIdleTimer = null;
      this._menuIndex = -1;
      this._onKey = this._onKey.bind(this);
      this._onResize = this._onResize.bind(this);
      this._onSlotChange = this._onSlotChange.bind(this);
      this._onMouseMove = this._onMouseMove.bind(this);
      this._onTap = this._onTap.bind(this);
      this._onMessage = this._onMessage.bind(this);
      // Capture-phase close so a click anywhere dismisses the menu, but
      // ignore clicks that land inside the menu itself — otherwise the
      // capture handler runs before the menu's own (bubble) handler and
      // clears _menuIndex out from under it.
      this._onDocClick = e => {
        if (this._menu && e.composedPath && e.composedPath().includes(this._menu)) return;
        this._closeMenu();
      };
    }
    get designWidth() {
      return parseInt(this.getAttribute('width'), 10) || DESIGN_W_DEFAULT;
    }
    get designHeight() {
      return parseInt(this.getAttribute('height'), 10) || DESIGN_H_DEFAULT;
    }
    connectedCallback() {
      // Presenter-view popup loads deckUrl?_snthumb=...#N for its prev/cur/
      // next thumbnails — the rail has no business rendering inside those
      // (wrong scale, and it offsets the stage so the thumb shows a gutter).
      if (/[?&]_snthumb=/.test(location.search)) this.setAttribute('no-rail', '');
      this._render();
      this._loadNotes();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      window.addEventListener('keydown', this._onKey);
      window.addEventListener('resize', this._onResize);
      window.addEventListener('mousemove', this._onMouseMove, {
        passive: true
      });
      window.addEventListener('message', this._onMessage);
      window.addEventListener('click', this._onDocClick, true);
      this.addEventListener('click', this._onTap);
      // Print lays every slide out as its own page, so [data-deck-active]-
      // gated entrance styles need the attribute on every slide (not just
      // the current one) or their content prints at the hidden base style.
      // The transient freeze style lands BEFORE the attributes so any
      // attribute-keyed transition fires at 0s (changing transition-
      // duration after a transition has started doesn't affect it).
      this._onBeforePrint = () => {
        this._syncPrintPageRule();
        if (this._freezeStyle) this._freezeStyle.remove();
        this._freezeStyle = document.createElement('style');
        this._freezeStyle.textContent = '*,*::before,*::after{transition-duration:0s !important}';
        document.head.appendChild(this._freezeStyle);
        this._slides.forEach(s => s.setAttribute('data-deck-active', ''));
      };
      this._onAfterPrint = () => {
        this._applyIndex({
          showOverlay: false,
          broadcast: false
        });
        if (this._freezeStyle) {
          this._freezeStyle.remove();
          this._freezeStyle = null;
        }
      };
      window.addEventListener('beforeprint', this._onBeforePrint);
      window.addEventListener('afterprint', this._onAfterPrint);
      // Initial collection + layout happens via slotchange, which fires on mount.
      this._enableRail();
      // Hold the stage hidden until webfonts are ready so the first visible
      // paint has the deck's real typography — the :not(:defined) guard in
      // the page HTML only covers custom-element upgrade, not font load.
      // Capped so a 404'd font URL can't blank the deck indefinitely.
      this.setAttribute('data-fonts-pending', '');
      const reveal = () => this.removeAttribute('data-fonts-pending');
      // Unconditional cap — rAF can be suspended in a hidden iframe, which
      // would strand the one inside the rAF callback.
      setTimeout(reveal, 2000);
      // rAF first: fonts.ready is a pre-resolved promise until layout has
      // resolved the slotted text's font-family and pushed a FontFace into
      // 'loading'. Reading it here in connectedCallback (parse-time) would
      // settle the race in a microtask before any font fetch starts.
      requestAnimationFrame(() => {
        Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), new Promise(r => setTimeout(r, 2000))]).then(reveal, reveal);
      });
    }
    _enableRail() {
      // Idempotent — older host builds still post __omelette_rail_enabled.
      // no-rail guard keeps the observers/stylesheet walk off the cheap path
      // for presenter-popup thumbnail iframes (up to 9 per view).
      if (this._railEnabled || this.hasAttribute('no-rail')) return;
      this._railEnabled = true;
      // Per-viewer preference — restored alongside rail width. Default on;
      // only a stored '0' (from the TweaksPanel toggle) hides it.
      this._railVisible = true;
      try {
        if (localStorage.getItem('deck-stage.railVisible') === '0') this._railVisible = false;
      } catch (e) {}
      // Live thumbnail updates: watch the light-DOM slides for content
      // edits and re-clone just the affected thumb(s), debounced. Ignore
      // the data-deck-* / data-screen-label / data-om-validate attributes
      // this component itself writes so nav doesn't trigger spurious
      // refreshes — except data-deck-skip, which now arrives from the host
      // re-render and is what updates the rail badge, print bookkeeping,
      // and deckSkipped re-broadcast.
      const OWN_ATTRS = /^data-(deck-(?!skip$)|screen-label$|om-validate$)/;
      this._liveDirty = new Set();
      this._liveObserver = new MutationObserver(records => {
        for (const r of records) {
          if (r.type === 'attributes' && OWN_ATTRS.test(r.attributeName || '')) continue;
          let n = r.target;
          while (n && n.parentElement !== this) n = n.parentElement;
          // Skip/unskip is handled below without re-cloning (the badge sits
          // on the thumb wrapper, not the clone) — don't mark the slide
          // dirty for an attr change whose only visible effect is the badge.
          if (n && this._slideSet && this._slideSet.has(n) && !(r.type === 'attributes' && r.attributeName === 'data-deck-skip')) {
            this._liveDirty.add(n);
          }
          // Host-driven skip toggle: sync the rail badge + print + presenter
          // skipped-list the way _toggleSkip used to do locally.
          if (r.type === 'attributes' && r.attributeName === 'data-deck-skip' && n && this._slideSet && this._slideSet.has(n)) {
            const i = this._slides.indexOf(n);
            if (this._thumbs && this._thumbs[i]) {
              if (n.hasAttribute('data-deck-skip')) this._thumbs[i].thumb.setAttribute('data-skip', '');else this._thumbs[i].thumb.removeAttribute('data-skip');
            }
            this._markLastVisible();
            try {
              window.postMessage({
                slideIndexChanged: this._index,
                deckTotal: this._slides.length,
                deckSkipped: this._skippedIndices()
              }, '*');
            } catch (e) {}
          }
        }
        if (this._liveDirty.size && !this._liveTimer) {
          this._liveTimer = setTimeout(() => {
            this._liveTimer = null;
            this._liveDirty.forEach(s => this._refreshThumb(s));
            this._liveDirty.clear();
          }, 200);
        }
      });
      this._liveObserver.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      // Lazy thumbnail materialization — clone the slide only when its
      // frame scrolls into (or near) the rail viewport. rootMargin gives
      // ~4 thumbs of pre-load so fast scrolling doesn't flash blanks.
      this._railObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting && e.target.__deckThumb) {
            this._materialize(e.target.__deckThumb);
          }
        });
      }, {
        root: this._rail,
        rootMargin: '400px 0px'
      });
      // Tweaks typically change CSS vars / attrs OUTSIDE <deck-stage>
      // (on <html>, <body>, a wrapper div, or a <style> tag), which
      // _liveObserver can't see. Re-snapshot author CSS (constructable
      // sheet is shared by reference, so one replaceSync updates every
      // thumb shadow root) and re-sync each thumb host's attrs + custom
      // properties. In-slide DOM mutations are _liveObserver's job.
      // Debounced so slider drags don't thrash.
      this._onTweakChange = () => {
        clearTimeout(this._tweakTimer);
        this._tweakTimer = setTimeout(() => {
          this._snapshotAuthorCss();
          // One getComputedStyle for the whole batch — each
          // getPropertyValue read below reuses the same computed style
          // as long as nothing invalidates layout between thumbs.
          const cs = getComputedStyle(this);
          (this._thumbs || []).forEach(t => {
            if (t.host) this._syncThumbHostAttrs(t.host, cs);
          });
        }, 120);
      };
      window.addEventListener('tweakchange', this._onTweakChange);
      this._snapshotAuthorCss();
      // Re-snapshot once any still-loading stylesheet settles — it throws on
      // .cssRules above and silently contributes '' → unstyled thumbs on a
      // cold mount. {once:true}; routed through the debounced handler.
      document.querySelectorAll('link[rel~="stylesheet"]').forEach(l => {
        try {
          if (l.sheet && l.sheet.cssRules) return;
        } catch (e) {}
        l.addEventListener('load', this._onTweakChange, {
          once: true
        });
        l.addEventListener('error', this._onTweakChange, {
          once: true
        });
      });
      if (document.fonts) document.fonts.ready.then(this._onTweakChange, this._onTweakChange);
      // Build the rail now that it's enabled — slotchange already fired,
      // so _renderRail's early-return skipped the initial build.
      this._syncRailHidden();
      this._renderRail();
      this._fit();
    }

    /** Snapshot document stylesheets into a constructable sheet that each
     *  thumbnail's nested shadow root adopts — so author CSS styles the
     *  cloned slide content without touching this component's chrome.
     *  Cross-origin sheets throw on .cssRules — skip them. Re-callable:
     *  the existing constructable sheet is reused via replaceSync so every
     *  already-adopted shadow root picks up the fresh CSS without re-adopt. */
    _snapshotAuthorCss() {
      // :root in an adopted sheet inside a shadow root matches nothing
      // (only the document root qualifies), so author rules like
      // `:root[data-voice="modern"] .serif` never reach the clones.
      // Rewrite :root → :host and mirror <html>'s data-*/class/lang onto
      // each thumb host (see _syncThumbHostAttrs) so the same selectors
      // match inside the thumbnail's shadow tree.
      const authorCss = Array.from(document.styleSheets).map(sh => {
        try {
          return Array.from(sh.cssRules).map(r => r.cssText).join('\n');
        } catch (e) {
          return '';
        }
      }).join('\n')
      // The shadow host is featureless outside the functional :host(...)
      // form, so any compound on :root — [attr], .class, #id, :pseudo —
      // must become :host(<compound>) not :host<compound>. Same for the
      // html type selector (Tailwind class-strategy dark mode emits
      // html.dark; Pico uses html[data-theme]), which has nothing to
      // match inside the thumb's shadow tree.
      .replace(/:root((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)/g, ':host($1)').replace(/:root\b/g, ':host').replace(/(^|[\s,>~+(}])html((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)(?![-\w])/g, '$1:host($2)').replace(/(^|[\s,>~+(}])html(?![-\w])/g, '$1:host');
      // Every custom property the author references. _syncThumbHostAttrs
      // mirrors each one's *computed* value at <deck-stage> onto the
      // thumb host so the live value wins over the :host default above
      // regardless of which ancestor the tweak wrote to (<html>, <body>,
      // a wrapper div, or the deck-stage element itself all inherit
      // down to getComputedStyle(this)).
      this._authorVars = new Set(authorCss.match(/--[\w-]+/g) || []);
      try {
        if (!this._adoptedSheet) this._adoptedSheet = new CSSStyleSheet();
        this._adoptedSheet.replaceSync(authorCss);
      } catch (e) {
        this._adoptedSheet = null;
        this._authorCss = authorCss;
      }
    }
    _syncThumbHostAttrs(host, cs) {
      const de = document.documentElement;
      // setAttribute overwrites but can't delete — an attr removed from
      // <html> (toggleAttribute off, classList emptied) would linger on
      // the host and :host([data-*]) / :host(.foo) rules would keep
      // matching. Remove stale mirrored attrs first; iterate backward
      // because removeAttribute mutates the live NamedNodeMap.
      for (let i = host.attributes.length - 1; i >= 0; i--) {
        const n = host.attributes[i].name;
        if ((n.startsWith('data-') || n === 'class' || n === 'lang') && !de.hasAttribute(n)) {
          host.removeAttribute(n);
        }
      }
      for (const a of de.attributes) {
        if (a.name.startsWith('data-') || a.name === 'class' || a.name === 'lang') {
          host.setAttribute(a.name, a.value);
        }
      }
      // The :root→:host rewrite in _snapshotAuthorCss pins each custom
      // property to its stylesheet default on the thumb host, shadowing
      // the live value that would otherwise inherit. Tweaks can write the
      // live value on any ancestor — <html>, <body>, a wrapper div, the
      // deck-stage element — so read it as the *computed* value at
      // <deck-stage> (which sees the whole inheritance chain) rather than
      // trying to guess which element the author wrote to. Inline on the
      // host beats the :host{} rule. remove-stale covers vars dropped
      // from the stylesheet between snapshots.
      const vars = this._authorVars || new Set();
      for (let i = host.style.length - 1; i >= 0; i--) {
        const p = host.style[i];
        if (p.startsWith('--') && !vars.has(p)) host.style.removeProperty(p);
      }
      const live = cs || getComputedStyle(this);
      vars.forEach(p => {
        const v = live.getPropertyValue(p);
        if (v) host.style.setProperty(p, v.trim());else host.style.removeProperty(p);
      });
    }
    disconnectedCallback() {
      window.removeEventListener('keydown', this._onKey);
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('mousemove', this._onMouseMove);
      window.removeEventListener('message', this._onMessage);
      window.removeEventListener('click', this._onDocClick, true);
      window.removeEventListener('beforeprint', this._onBeforePrint);
      window.removeEventListener('afterprint', this._onAfterPrint);
      if (this._freezeStyle) {
        this._freezeStyle.remove();
        this._freezeStyle = null;
      }
      this.removeEventListener('click', this._onTap);
      if (this._hideTimer) clearTimeout(this._hideTimer);
      if (this._mouseIdleTimer) clearTimeout(this._mouseIdleTimer);
      if (this._liveTimer) clearTimeout(this._liveTimer);
      if (this._tweakTimer) clearTimeout(this._tweakTimer);
      if (this._railAnimTimer) clearTimeout(this._railAnimTimer);
      if (this._scaleRaf) cancelAnimationFrame(this._scaleRaf);
      if (this._liveObserver) this._liveObserver.disconnect();
      if (this._railObserver) this._railObserver.disconnect();
      if (this._onTweakChange) window.removeEventListener('tweakchange', this._onTweakChange);
      // Drop the text-wrap defaults when the last deck-stage leaves, so a
      // deleted deck's typography can't restyle whatever replaces it.
      // (#deck-stage-print-page keeps its existing keep-forever lifecycle.)
      if (!document.querySelector('deck-stage')) {
        const tw = document.getElementById('deck-stage-text-wrap');
        if (tw) tw.remove();
      }
    }
    attributeChangedCallback() {
      if (this._canvas) {
        this._canvas.style.width = this.designWidth + 'px';
        this._canvas.style.height = this.designHeight + 'px';
        this._canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
        this._canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
        if (this._rail) {
          this._rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
        }
        this._fit();
        this._scaleThumbs();
        this._syncPrintPageRule();
      }
    }
    _render() {
      const style = document.createElement('style');
      style.textContent = stylesheet;
      const stage = document.createElement('div');
      stage.className = 'stage';
      const canvas = document.createElement('div');
      canvas.className = 'canvas';
      canvas.style.width = this.designWidth + 'px';
      canvas.style.height = this.designHeight + 'px';
      canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
      canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
      const slot = document.createElement('slot');
      slot.addEventListener('slotchange', this._onSlotChange);
      canvas.appendChild(slot);
      stage.appendChild(canvas);

      // Overlay: compact, solid black, with clickable controls.
      const overlay = document.createElement('div');
      overlay.className = 'overlay export-hidden';
      overlay.setAttribute('role', 'toolbar');
      overlay.setAttribute('aria-label', 'Deck controls');
      overlay.setAttribute('data-omelette-chrome', '');
      overlay.innerHTML = `
        <button class="btn prev" type="button" aria-label="Previous slide" title="Previous (←)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5"/></svg>
        </button>
        <span class="count" aria-live="polite"><span class="current">1</span><span class="sep">/</span><span class="total">1</span></span>
        <button class="btn next" type="button" aria-label="Next slide" title="Next (→)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5"/></svg>
        </button>
        <span class="divider"></span>
        <button class="btn reset" type="button" aria-label="Reset to first slide" title="Reset (R)">Reset<span class="kbd">R</span></button>
      `;
      overlay.querySelector('.prev').addEventListener('click', () => this._advance(-1, 'click'));
      overlay.querySelector('.next').addEventListener('click', () => this._advance(1, 'click'));
      overlay.querySelector('.reset').addEventListener('click', () => this._go(0, 'click'));

      // Thumbnail rail + context menu. Thumbnails are populated in
      // _renderRail() after _collectSlides().
      const rail = document.createElement('div');
      rail.className = 'rail export-hidden';
      rail.setAttribute('data-omelette-chrome', '');
      // Edit mode hooks wheel to pan the canvas; this opts the rail's own
      // scrollview out so thumbnails stay scrollable while editing.
      rail.setAttribute('data-dc-wheel-passthru', '');
      rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
      // Edge auto-scroll while dragging a thumb near the rail's top/bottom
      // so off-screen drop targets are reachable. Native dragover fires
      // continuously while the pointer is stationary, so a per-event nudge
      // (ramped by edge proximity) is enough — no rAF loop needed.
      rail.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        const r = rail.getBoundingClientRect();
        const EDGE = 40;
        const dt = e.clientY - r.top;
        const db = r.bottom - e.clientY;
        if (dt < EDGE) rail.scrollTop -= Math.ceil((EDGE - dt) / 3);else if (db < EDGE) rail.scrollTop += Math.ceil((EDGE - db) / 3);
      });
      const menu = document.createElement('div');
      menu.className = 'ctxmenu export-hidden';
      menu.setAttribute('data-omelette-chrome', '');
      menu.innerHTML = `
        <button type="button" data-act="skip">Skip slide</button>
        <button type="button" data-act="up">Move up</button>
        <button type="button" data-act="down">Move down</button>
        <button type="button" data-act="duplicate">Duplicate slide</button>
        <hr>
        <button type="button" data-act="delete">Delete slide</button>
      `;
      menu.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        const i = this._menuIndex;
        const list = this._menuIndices;
        this._closeMenu();
        if (act === 'skip') this._toggleSkip(i);else if (act === 'up') this._moveSlide(i, i - 1);else if (act === 'down') this._moveSlide(i, i + 1);else if (act === 'duplicate') this._duplicateSlide(i);else if (act === 'delete') this._openConfirm(list && list.length ? list : [i]);
      });
      menu.addEventListener('contextmenu', e => e.preventDefault());

      // Rail resize handle — drag to set --deck-rail-w, persisted to
      // localStorage so the width survives reloads.
      const resize = document.createElement('div');
      resize.className = 'rail-resize export-hidden';
      resize.setAttribute('data-omelette-chrome', '');
      resize.addEventListener('pointerdown', e => {
        e.preventDefault();
        resize.setPointerCapture(e.pointerId);
        resize.setAttribute('data-dragging', '');
        const move = ev => this._setRailWidth(ev.clientX);
        const up = () => {
          resize.removeEventListener('pointermove', move);
          resize.removeEventListener('pointerup', up);
          resize.removeEventListener('pointercancel', up);
          resize.removeAttribute('data-dragging');
          try {
            localStorage.setItem('deck-stage.railWidth', String(this._railPx));
          } catch (err) {}
        };
        resize.addEventListener('pointermove', move);
        resize.addEventListener('pointerup', up);
        resize.addEventListener('pointercancel', up);
      });

      // Delete-confirm dialog — mirrors the SPA's ConfirmDialog layout.
      const confirm = document.createElement('div');
      confirm.className = 'confirm-backdrop export-hidden';
      confirm.setAttribute('data-omelette-chrome', '');
      confirm.innerHTML = `
        <div class="confirm" role="dialog" aria-modal="true">
          <div class="body">
            <div class="title">Delete slide?</div>
            <div class="msg">This slide will be removed from the deck.</div>
          </div>
          <div class="footer">
            <button type="button" class="cancel">Cancel</button>
            <button type="button" class="danger">Delete</button>
          </div>
        </div>
      `;
      confirm.addEventListener('click', e => {
        if (e.target === confirm) {
          this._closeConfirm();
          this._focusCurrentThumb();
        }
      });
      confirm.querySelector('.cancel').addEventListener('click', () => {
        this._closeConfirm();
        this._focusCurrentThumb();
      });
      confirm.querySelector('.danger').addEventListener('click', () => {
        // Re-resolve at click time — the elements are the user's actual
        // selection; their indices may have shifted since confirm-open.
        const list = (this._confirmEls || []).map(el => this._slides.indexOf(el)).filter(i => i >= 0);
        this._closeConfirm();
        this._deleteSlides(list);
        this._focusCurrentThumb();
      });
      this._root.append(style, rail, resize, stage, overlay, menu, confirm);
      this._canvas = canvas;
      this._stage = stage;
      this._slot = slot;
      this._overlay = overlay;
      this._rail = rail;
      this._resize = resize;
      this._menu = menu;
      this._confirm = confirm;
      this._countEl = overlay.querySelector('.current');
      this._totalEl = overlay.querySelector('.total');

      // Restore persisted rail width.
      let rw = 188;
      try {
        const s = localStorage.getItem('deck-stage.railWidth');
        if (s) rw = parseInt(s, 10) || rw;
      } catch (err) {}
      this._setRailWidth(rw);
      this._syncRailHidden();
    }
    _setRailWidth(px) {
      const w = Math.max(120, Math.min(360, Math.round(px)));
      this._railPx = w;
      this.style.setProperty('--deck-rail-w', w + 'px');
      this._fit();
      // _scaleThumbs forces a sync layout (frame.offsetWidth) then writes
      // N transforms. During a resize drag this runs per-pointermove;
      // coalesce to one per frame.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }

    /** @page must live in the document stylesheet — it's a no-op inside
     *  shadow DOM. (Re-)append so any author @page landing later in
     *  source order can't reintroduce a margin and push each slide onto
     *  two sheets; called again from beforeprint. */
    _syncPrintPageRule() {
      const id = 'deck-stage-print-page';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      (document.body || document.head).appendChild(tag);
      tag.textContent = '@page { size: ' + this.designWidth + 'px ' + this.designHeight + 'px; margin: 0; } ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; overflow: visible !important; height: auto !important; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; } ' +
      // Jump authored animations/transitions to their end state so print
      // never captures mid-entrance — pairs with the beforeprint handler
      // in connectedCallback that sets data-deck-active on every slide.
      '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for slide text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins. Lives in the document,
     *  not the shadow root, for two reasons: document rules reach the
     *  slotted (light DOM) slides, and _snapshotAuthorCss copies document
     *  stylesheets into each thumbnail's shadow root, so the thumbs wrap
     *  the same way — a deck-stage-scoped selector would match nothing
     *  there. data-omelette-injected marks the tag for the host editor
     *  to strip at serialize, so it is never written back as authored
     *  source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('deck-stage-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'deck-stage-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }
    _onSlotChange() {
      // Self-mutate path already reconciled synchronously and emitted
      // slidechange; skip the async slotchange it caused.
      if (this._squelchSlotChange) {
        this._squelchSlotChange = false;
        return;
      }
      // Primary lock-clear is the host's __deck_rail_ack; this clears on a
      // dropped ack so the rail can't stay dead.
      this._railLock = false;
      this._collectSlides();
      this._restoreIndex();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'init'
      });
      this._fit();
      // The deck just changed under any open rail surface — an open
      // confirm or menu is a question about the OLD deck (its labels and
      // counts may now lie), so close them rather than let a stale
      // answer fire. The element-held selection re-resolves, but the
      // user should re-read what they're deleting.
      if (this._confirm && this._confirm.hasAttribute('data-open')) {
        this._closeConfirm();
        // The dialog held focus (danger button); hand it back to the rail.
        this._focusCurrentThumb(true);
      }
      if (this._menu && this._menu.hasAttribute('data-open')) this._closeMenu();
      // Editor-mode deletes rebuild the rail through here; a confirmed
      // delete that started from the keyboard still owes focus to the
      // (new) current thumb.
      if (this._pendingRailRefocus) this._focusCurrentThumb(true);
    }
    _collectSlides() {
      const assigned = this._slot.assignedElements({
        flatten: true
      });
      this._slides = assigned.filter(el => {
        // Skip template/style/script nodes even if someone slots them.
        const tag = el.tagName;
        return tag !== 'TEMPLATE' && tag !== 'SCRIPT' && tag !== 'STYLE';
      });
      this._slideSet = new Set(this._slides);
      // Selection is element-keyed: drop entries whose slide is gone
      // (deleted, or replaced wholesale by a host re-render).
      if (this._selected && this._selected.size) {
        this._selected.forEach(s => {
          if (!this._slideSet.has(s)) this._selected.delete(s);
        });
      }
      if (this._selAnchor && !this._slideSet.has(this._selAnchor)) this._selAnchor = null;
      this._slides.forEach((slide, i) => {
        const n = i + 1;
        slide.setAttribute('data-screen-label', `${pad2(n)} ${getSlideLabel(slide)}`);

        // Validation attribute for comment flow / auto-checks.
        if (!slide.hasAttribute('data-om-validate')) {
          slide.setAttribute('data-om-validate', VALIDATE_ATTR);
        }
        slide.setAttribute('data-deck-slide', String(i));
      });
      if (this._totalEl) this._totalEl.textContent = String(this._slides.length || 1);
      if (this._index >= this._slides.length) this._index = Math.max(0, this._slides.length - 1);
      this._markLastVisible();
      this._renderRail();
    }

    /** Tag the last non-skipped slide so print CSS can drop its
     *  break-after (see the @media print comment above — :last-child
     *  alone matches a hidden skipped slide). */
    _markLastVisible() {
      let last = null;
      this._slides.forEach(s => {
        s.removeAttribute('data-deck-last-visible');
        if (!s.hasAttribute('data-deck-skip')) last = s;
      });
      if (last) last.setAttribute('data-deck-last-visible', '');
    }
    _loadNotes() {
      // Per-slide data-speaker-notes is authoritative when present (attrs
      // travel with the element on reorder/dup/delete); a slide without
      // the attr falls through to the legacy #speaker-notes JSON array
      // PER SLIDE so a single attr on a JSON-authored deck doesn't blank
      // the rest.
      const tag = document.getElementById('speaker-notes');
      let json = null;
      if (tag) try {
        const p = JSON.parse(tag.textContent || '[]');
        if (Array.isArray(p)) json = p;
      } catch (e) {
        console.warn('[deck-stage] Failed to parse #speaker-notes JSON:', e);
      }
      this._notes = this._slides.map((s, i) => {
        const a = s.getAttribute('data-speaker-notes');
        return a !== null ? a : json && typeof json[i] === 'string' ? json[i] : '';
      });
    }
    _restoreIndex() {
      // The host's ?slide= param is delivered as a #<int> hash (1-indexed) on
      // the iframe src. No hash → slide 1; the deck itself keeps no position
      // state across loads.
      const h = (location.hash || '').match(/^#(\d+)$/);
      if (h) {
        const n = parseInt(h[1], 10) - 1;
        if (n >= 0 && n < this._slides.length) this._index = n;
      }
    }
    _applyIndex({
      showOverlay = true,
      broadcast = true,
      reason = 'init'
    } = {}) {
      if (!this._slides.length) return;
      const prev = this._prevIndex == null ? -1 : this._prevIndex;
      const curr = this._index;
      // Keep the iframe's own hash in sync so an in-iframe location.reload()
      // (reload banner path in viewer-handle.ts) lands on the current slide,
      // not the stale deep-link hash from initial load.
      try {
        history.replaceState(null, '', '#' + (curr + 1));
      } catch (e) {}
      this._slides.forEach((s, i) => {
        if (i === curr) s.setAttribute('data-deck-active', '');else s.removeAttribute('data-deck-active');
      });
      if (this._countEl) this._countEl.textContent = String(curr + 1);
      // Follow-scroll on every navigation (init deep-link, keyboard, click,
      // tap, external goTo) — the only time we *don't* want the rail to
      // track current is after a rail-internal mutation, where _renderRail
      // has already restored the user's scroll position and yanking back to
      // current would undo it.
      this._syncRail(reason !== 'mutation');
      if (broadcast) {
        // (1) Legacy: host-window postMessage for speaker-notes renderers.
        try {
          window.postMessage({
            slideIndexChanged: curr,
            deckTotal: this._slides.length,
            deckSkipped: this._skippedIndices()
          }, '*');
        } catch (e) {}

        // (2) In-page CustomEvent on the <deck-stage> element itself.
        //     Bubbles and composes out of shadow DOM so slide code can listen:
        //       document.querySelector('deck-stage').addEventListener('slidechange', e => {
        //         e.detail.index, e.detail.previousIndex, e.detail.total, e.detail.slide, e.detail.reason
        //       });
        const detail = {
          index: curr,
          previousIndex: prev,
          total: this._slides.length,
          slide: this._slides[curr] || null,
          previousSlide: prev >= 0 ? this._slides[prev] || null : null,
          reason: reason // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
        };
        this.dispatchEvent(new CustomEvent('slidechange', {
          detail,
          bubbles: true,
          composed: true
        }));
      }
      this._prevIndex = curr;
      if (showOverlay) this._flashOverlay();
    }
    _flashOverlay() {
      // Host posts __omelette_presenting while in fullscreen/tab presentation
      // mode — suppress the nav footer entirely (both hover and slide-change
      // flash) so the audience sees clean slides.
      if (!this._overlay || this._presenting) return;
      this._overlay.setAttribute('data-visible', '');
      if (this._hideTimer) clearTimeout(this._hideTimer);
      this._hideTimer = setTimeout(() => {
        this._overlay.removeAttribute('data-visible');
      }, OVERLAY_HIDE_MS);
    }
    _railWidth() {
      // State-based, no offsetWidth: the first _fit() can run before the
      // rail has had layout on some load paths, and a 0 there paints the
      // slide full-width for one frame before the post-slotchange _fit()
      // corrects it.
      if (!this._railEnabled || !this._railVisible || this.hasAttribute('no-rail') || this.hasAttribute('noscale') || this._presenting || this._previewMode || NARROW_MQ.matches) return 0;
      return this._railPx || 0;
    }
    _fit() {
      if (!this._canvas) return;
      const stage = this._canvas.parentElement;
      // PPTX export sets noscale so the DOM capture sees authored-size
      // geometry — the scaled canvas is in shadow DOM, so the exporter's
      // resetTransformSelector can't reach .canvas.style.transform directly.
      if (this.hasAttribute('noscale')) {
        this._canvas.style.transform = 'none';
        if (stage) stage.style.left = '0';
        if (this._overlay) this._overlay.style.marginLeft = '0';
        return;
      }
      const rw = this._railWidth();
      if (stage) stage.style.left = rw + 'px';
      // Overlay is centred on the viewport via left:50% + translate(-50%);
      // marginLeft shifts the centre by rw/2 so it lands in the middle of
      // the [rw, innerWidth] stage region.
      if (this._overlay) this._overlay.style.marginLeft = rw / 2 + 'px';
      const vw = window.innerWidth - rw;
      const vh = window.innerHeight;
      const s = Math.min(vw / this.designWidth, vh / this.designHeight);
      this._canvas.style.transform = `scale(${s})`;
    }
    _onResize() {
      this._fit();
      // Crossing the narrow-viewport breakpoint reveals the rail — rerun the
      // thumbnail scale the same way _setRailWidth does.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }
    _onMouseMove() {
      // Keep overlay visible while mouse moves; hide after idle.
      this._flashOverlay();
    }
    _onMessage(e) {
      const d = e.data;
      if (d && typeof d.__omelette_presenting === 'boolean') {
        this._presenting = d.__omelette_presenting;
        if (this._presenting && this._overlay) {
          this._overlay.removeAttribute('data-visible');
          if (this._hideTimer) clearTimeout(this._hideTimer);
        }
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Host's Preview segment (ViewerMode='none'): the rail's drag-reorder /
      // right-click skip-delete affordances are editing chrome, so hide it
      // while the user is just looking at the deck. Same hard-hide path as
      // presenting; independent of the user's _railVisible preference so
      // returning to Edit restores whatever they had.
      if (d && typeof d.__omelette_preview_mode === 'boolean') {
        if (d.__omelette_preview_mode === this._previewMode) return;
        this._previewMode = d.__omelette_preview_mode;
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Host has processed a dc-op; rail input is safe again. Not tied to
      // slotchange — setAttr and refusal don't fire one. On refusal,
      // revert the optimistic _index/hash adjustment so the next nav
      // starts from what's actually on screen.
      if (d && d.__dc_op_ack) {
        this._railLock = false;
        if (d.applied === false && this._indexBeforeEmit != null) {
          this._index = this._indexBeforeEmit;
          try {
            history.replaceState(null, '', '#' + (this._index + 1));
          } catch (e) {}
        }
        this._indexBeforeEmit = null;
        // A refused op never re-renders, so slotchange won't restore the
        // keyboard flow's focus — do it here. (Applied ops refocus in
        // _onSlotChange, after the rail has been rebuilt.)
        if (d.applied === false && this._pendingRailRefocus) {
          this._focusCurrentThumb(true);
        }
      }
      // Per-viewer show/hide, driven by the TweaksPanel's auto-injected
      // "Thumbnail rail" toggle (or any author script). Independent of
      // whether the Tweaks panel itself is open — closing the panel
      // doesn't change rail visibility. Persists alongside rail width.
      if (d && d.type === '__deck_rail_visible' && typeof d.on === 'boolean') {
        if (d.on === this._railVisible) return;
        this._railVisible = d.on;
        try {
          localStorage.setItem('deck-stage.railVisible', d.on ? '1' : '0');
        } catch (e) {}
        // Arm the transition, commit it, then flip state — otherwise the
        // browser coalesces both writes and nothing animates on show.
        this.setAttribute('data-rail-anim', '');
        void (this._rail && this._rail.offsetHeight);
        this._syncRailHidden();
        this._fit();
        this._scaleThumbs();
        clearTimeout(this._railAnimTimer);
        this._railAnimTimer = setTimeout(() => this.removeAttribute('data-rail-anim'), 220);
      }
      if (d && d.type === '__omelette_rail_enabled') this._enableRail();
    }
    _syncRailHidden() {
      if (!this._rail) return;
      // data-presenting is the hard hide (display:none) for flag-off,
      // presentation mode, and the host's Preview segment — instant, no
      // transition. data-user-hidden is the soft hide (translateX(-100%))
      // for the viewer's rail toggle, so show/hide slides under
      // :host([data-rail-anim]).
      const hard = !this._railEnabled || this._presenting || this._previewMode;
      if (hard) this._rail.setAttribute('data-presenting', '');else this._rail.removeAttribute('data-presenting');
      if (!this._railVisible) this._rail.setAttribute('data-user-hidden', '');else this._rail.removeAttribute('data-user-hidden');
      // translateX hide leaves thumbs (tabIndex=0) in the tab order —
      // inert keeps them unfocusable while the rail is off-screen.
      this._rail.inert = hard || !this._railVisible;
    }
    _onTap(e) {
      // Touch-only — keyboard + the overlay toolbar cover nav on desktop.
      if (FINE_POINTER_MQ.matches) return;
      // Only taps that land on the stage (slide content or letterbox); the
      // overlay / rail / menus are siblings with their own click handlers.
      const path = e.composedPath();
      if (!this._stage || !path.includes(this._stage)) return;
      // Let interactive slide content keep the tap. composedPath (not
      // e.target.closest) so we see through open shadow roots — a <button>
      // inside a slide-authored custom element retargets e.target to the
      // host but still appears in the composed path.
      if (e.defaultPrevented) return;
      for (const n of path) {
        if (n === this._stage) break;
        if (n.matches && n.matches(INTERACTIVE_SEL)) return;
      }
      e.preventDefault();
      const rw = this._railWidth();
      const mid = rw + (window.innerWidth - rw) / 2;
      this._advance(e.clientX < mid ? -1 : 1, 'tap');
    }
    _onKey(e) {
      // Ignore when the user is typing.
      const t = e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      // Confirm dialog swallows nav keys while open; Escape cancels. Enter
      // is left to the focused button's native activation so Tab→Cancel
      // →Enter activates Cancel, not the window-level confirm path.
      if (this._confirm && this._confirm.hasAttribute('data-open')) {
        if (e.key === 'Escape') {
          this._closeConfirm();
          this._focusCurrentThumb();
          e.preventDefault();
        }
        return;
      }
      if (e.key === 'Escape' && this._menu && this._menu.hasAttribute('data-open')) {
        this._closeMenu();
        e.preventDefault();
        return;
      }
      if (e.key === 'Escape' && this._selected.size) {
        // Collapse the multi-selection back to the current slide (the
        // implicit selection), not to nothing.
        this._clearSelection();
        e.preventDefault();
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const key = e.key;
      let handled = true;
      if (key === 'ArrowRight' || key === 'PageDown' || key === ' ' || key === 'Spacebar') {
        this._advance(1, 'keyboard');
      } else if (key === 'ArrowLeft' || key === 'PageUp') {
        this._advance(-1, 'keyboard');
      } else if (key === 'Home') {
        this._go(0, 'keyboard');
      } else if (key === 'End') {
        this._go(this._slides.length - 1, 'keyboard');
      } else if (key === 'r' || key === 'R') {
        this._go(0, 'keyboard');
      } else if (/^[0-9]$/.test(key)) {
        // 1..9 jump to that slide; 0 jumps to 10.
        const n = key === '0' ? 9 : parseInt(key, 10) - 1;
        if (n < this._slides.length) this._go(n, 'keyboard');
      } else {
        handled = false;
      }
      if (handled) {
        e.preventDefault();
        this._flashOverlay();
      }
    }
    _go(i, reason = 'api') {
      // User-initiated navigation collapses a multi-selection down to
      // the (implicit) current slide, like Keynote's arrow keys. 'click'
      // handles its own selection; programmatic reasons leave it alone.
      if (reason === 'keyboard' || reason === 'tap') this._clearSelection();
      if (!this._slides.length) return;
      const clamped = Math.max(0, Math.min(this._slides.length - 1, i));
      if (clamped === this._index) {
        this._flashOverlay();
        return;
      }
      this._index = clamped;
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason
      });
    }

    /** Step forward/back skipping any slide marked data-deck-skip. Falls
     *  back to _go's clamp-at-ends behaviour (flash overlay) when there's
     *  nothing further in that direction. */
    _advance(dir, reason) {
      if (!this._slides.length) return;
      let i = this._index + dir;
      while (i >= 0 && i < this._slides.length && this._slides[i].hasAttribute('data-deck-skip')) {
        i += dir;
      }
      if (i < 0 || i >= this._slides.length) {
        this._flashOverlay();
        return;
      }
      this._go(i, reason);
    }

    // ── Thumbnail rail ────────────────────────────────────────────────────
    //
    // Thumbs are keyed by slide element and reused across _renderRail()
    // calls, so a reorder/delete is an O(changed) DOM shuffle instead of an
    // O(N) teardown-and-re-clone. Each thumb starts as a lightweight shell
    // (num + empty frame); the clone is materialized lazily by an
    // IntersectionObserver when the frame scrolls into (or near) view, so
    // only visible-ish slides pay the clone + image-decode cost.

    _renderRail() {
      if (!this._rail || !this._railEnabled) {
        this._thumbs = [];
        return;
      }
      // FLIP: record each *materialized* thumb's top before the reconcile.
      // Off-screen (non-materialized) thumbs don't need the animation and
      // skipping their getBoundingClientRect saves a forced layout per
      // off-screen thumb on large decks.
      const prevTops = new Map();
      (this._thumbs || []).forEach(({
        thumb,
        slide,
        host
      }) => {
        if (host) prevTops.set(slide, thumb.getBoundingClientRect().top);
      });
      const st = this._rail.scrollTop;

      // Reconcile: reuse thumbs that already exist for a slide, create
      // shells for new slides, drop thumbs for removed slides.
      const bySlide = new Map();
      (this._thumbs || []).forEach(t => bySlide.set(t.slide, t));
      const next = [];
      this._slides.forEach(slide => {
        let t = bySlide.get(slide);
        if (t) bySlide.delete(slide);else t = this._makeThumb(slide);
        next.push(t);
      });
      // Orphans — slides removed since last render.
      bySlide.forEach(t => {
        if (this._railObserver) this._railObserver.unobserve(t.frame);
        t.thumb.remove();
      });
      // Put thumbs into document order to match _slides. insertBefore on
      // an already-correctly-placed node is a no-op, so this is cheap
      // when nothing moved.
      next.forEach((t, i) => {
        const want = t.thumb;
        const at = this._rail.children[i];
        if (at !== want) this._rail.insertBefore(want, at || null);
        t.i = i;
        t.num.textContent = String(i + 1);
        if (t.slide.hasAttribute('data-deck-skip')) t.thumb.setAttribute('data-skip', '');else t.thumb.removeAttribute('data-skip');
        if (this._selected.has(t.slide)) t.thumb.setAttribute('data-selected', '');else t.thumb.removeAttribute('data-selected');
      });
      this._thumbs = next;
      this._rail.scrollTop = st;
      if (prevTops.size) {
        const moved = [];
        this._thumbs.forEach(({
          thumb,
          slide
        }) => {
          const old = prevTops.get(slide);
          if (old == null) return;
          const dy = old - thumb.getBoundingClientRect().top;
          if (Math.abs(dy) < 1) return;
          thumb.style.transition = 'none';
          thumb.style.transform = `translateY(${dy}px)`;
          moved.push(thumb);
        });
        if (moved.length) {
          // Commit the inverted positions before flipping the transition
          // on — otherwise the browser coalesces both style writes and
          // nothing animates.
          void this._rail.offsetHeight;
          moved.forEach(t => {
            t.style.transition = 'transform 180ms cubic-bezier(.2,.7,.3,1)';
            t.style.transform = '';
          });
          setTimeout(() => moved.forEach(t => {
            t.style.transition = '';
          }), 220);
        }
      }
      requestAnimationFrame(() => this._scaleThumbs());
      this._syncRail(false);
    }

    /** Create a lightweight thumb shell for one slide. The clone is
     *  materialized later by the IntersectionObserver. Event handlers
     *  look up the thumb's *current* index (via _thumbs.indexOf) so the
     *  same element can be reused across reorders. */
    _makeThumb(slide) {
      const thumb = document.createElement('div');
      thumb.className = 'thumb';
      thumb.tabIndex = 0;
      const num = document.createElement('div');
      num.className = 'num';
      const frame = document.createElement('div');
      frame.className = 'frame';
      thumb.append(num, frame);
      const entry = {
        thumb,
        num,
        frame,
        slide,
        clone: null,
        host: null,
        i: -1
      };
      // entry.i is refreshed on every _renderRail reconcile pass, so
      // handlers read the thumb's current position without an O(N) scan.
      const idx = () => entry.i;
      thumb.addEventListener('click', e => {
        const i = idx();
        const slide = this._slides[i];
        // WebKit doesn't focus a plain element on click — focus
        // explicitly so Delete/Backspace works right after selecting a
        // slide by mouse. preventScroll: _syncRail owns the rail's
        // scroll position.
        thumb.focus({
          preventScroll: true
        });
        if (e.shiftKey || e.metaKey || e.ctrlKey) {
          // Multi-select gestures adjust the selection without
          // navigating (Keynote/Figma convention).
          e.preventDefault();
          if (e.shiftKey) {
            // Range from the anchor (last plain/cmd-clicked slide;
            // falls back to the current slide) to here, replacing any
            // previous range.
            let a = this._selAnchor ? this._slides.indexOf(this._selAnchor) : -1;
            if (a < 0) {
              a = this._index;
              this._selAnchor = this._slides[a] || null;
            }
            this._selected.clear();
            for (let j = Math.min(a, i); j <= Math.max(a, i); j++) {
              this._selected.add(this._slides[j]);
            }
          } else if (slide) {
            // Toggle. An empty explicit selection implicitly holds the
            // current slide — materialize it first so cmd-clicking a
            // second slide selects both.
            if (!this._selected.size && i !== this._index && this._slides[this._index]) {
              this._selected.add(this._slides[this._index]);
            }
            if (this._selected.has(slide)) this._selected.delete(slide);else {
              this._selected.add(slide);
              this._selAnchor = slide;
            }
          }
          this._syncSelection();
          return;
        }
        this._clearSelection();
        this._selAnchor = slide || null;
        this._go(i, 'click');
      });
      // ↑/↓ step through the rail when a thumb has focus. _go clamps at the
      // ends and _applyIndex→_syncRail scrolls the new current thumb into
      // view; we move focus to it (preventScroll — _syncRail already
      // scrolled) so a held key walks the whole list. stopPropagation keeps
      // this out of the window-level _onKey nav handler.
      thumb.addEventListener('keydown', e => {
        // Delete/Backspace with the rail focused deletes this thumb's
        // slide through the same confirm dialog as the menu item.
        // Listening on the thumb (never window-level) is what keeps
        // typing in the notes panel / slide inputs from ever landing
        // here; the target check is belt-and-braces for anything
        // focusable that ends up inside a thumb.
        if ((e.key === 'Delete' || e.key === 'Backspace') && !e.metaKey && !e.ctrlKey && !e.altKey) {
          const t = e.target;
          if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
          e.preventDefault();
          e.stopPropagation();
          // Same refusals as the menu item: never every slide, never
          // while a prior structural op is waiting on its ack. The
          // whole-deck refusal is announced (the menu greys its item
          // out; a silently dead key reads as breakage). The rail-lock
          // refusal stays silent: it lasts one ack round-trip and
          // matches the existing single-delete behavior.
          if (this._railLock) return;
          // Explicit selection wins; otherwise the focused thumb (which
          // plain click and ↑/↓ keep equal to the current slide).
          const sel = this._selected.size ? this._selectionIndices() : [idx()];
          if (sel.length >= this._slides.length) {
            this._showNotice(sel.length === 1 ? 'The last slide can’t be deleted.' : 'At least one slide has to stay — the whole deck can’t be deleted.');
            return;
          }
          this._openConfirm(sel);
          return;
        }
        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        e.preventDefault();
        e.stopPropagation();
        this._go(idx() + (e.key === 'ArrowDown' ? 1 : -1), 'keyboard');
        const cur = this._thumbs && this._thumbs[this._index];
        if (cur) cur.thumb.focus({
          preventScroll: true
        });
      });
      thumb.addEventListener('contextmenu', e => {
        e.preventDefault();
        this._openMenu(idx(), e.clientX, e.clientY);
      });
      thumb.draggable = true;
      thumb.addEventListener('dragstart', e => {
        // v1: dragging moves ONE slide, so a multi-selection would lie
        // about what's about to move — collapse it. (Group drag would
        // instead keep it and emit a batched move.)
        this._clearSelection();
        this._dragFrom = idx();
        thumb.setAttribute('data-dragging', '');
        e.dataTransfer.effectAllowed = 'move';
        try {
          e.dataTransfer.setData('text/plain', String(this._dragFrom));
        } catch (err) {}
      });
      thumb.addEventListener('dragend', () => {
        thumb.removeAttribute('data-dragging');
        this._clearDrop();
        this._dragFrom = null;
      });
      thumb.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        const r = thumb.getBoundingClientRect();
        this._setDrop(idx(), e.clientY < r.top + r.height / 2 ? 'before' : 'after');
      });
      thumb.addEventListener('drop', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        const i = idx();
        const r = thumb.getBoundingClientRect();
        let to = e.clientY >= r.top + r.height / 2 ? i + 1 : i;
        if (this._dragFrom < to) to--;
        const from = this._dragFrom;
        this._clearDrop();
        this._dragFrom = null;
        if (to !== from) this._moveSlide(from, to);
      });
      if (this._railObserver) this._railObserver.observe(frame);
      frame.__deckThumb = entry;
      return entry;
    }

    /** Lazily build the clone for a thumb that has scrolled into view. */
    _materialize(entry) {
      if (entry.host) return;
      const dw = this.designWidth,
        dh = this.designHeight;
      let clone = entry.slide.cloneNode(true);
      // The clone participates in the document's flat tree, so the
      // templates' position-based CSS page counters (.slide
      // { counter-increment: page }) would count every materialized
      // thumb before the real slides — folios print offset by the
      // thumb count (slide 2 reading "7" on a five-slide deck).
      // Neutralize the counter on the clone and drop its folio pill:
      // a thumbnail's own page number is unreadable at thumb scale
      // anyway, and the real slides' numbers stay truthful.
      clone.style.counterIncrement = 'none';
      clone.querySelectorAll('.page-foot').forEach(pf => pf.remove());
      // Canvas bitmaps don't clone — swap each cloned canvas for an <img>
      // of the live pixels. Best-effort: tainted canvases throw (left
      // as-is); zero-size are skipped; WebGL without preserveDrawingBuffer
      // reads back blank and the thumb gets a blank img (same as before).
      const liveCanvases = entry.slide.querySelectorAll('canvas');
      const cloneCanvases = clone.querySelectorAll('canvas');
      cloneCanvases.forEach((cv, i) => {
        const live = liveCanvases[i];
        if (!live || !live.width || !live.height) return;
        try {
          const img = document.createElement('img');
          img.src = live.toDataURL();
          img.alt = '';
          img.style.cssText = cv.style.cssText;
          img.className = cv.className;
          img.width = live.width;
          img.height = live.height;
          // Author CSS that sized the <canvas> via tag selector won't match
          // the <img> — pin the live canvas's laid-out box on the snapshot.
          if (live.clientWidth) {
            img.style.width = live.clientWidth + 'px';
            img.style.height = live.clientHeight + 'px';
          }
          cv.replaceWith(img);
        } catch (e) {}
      });
      // Neuter heavy media; replace <video> with its poster so the box
      // keeps a visual. <iframe>/<audio> become empty placeholders.
      // Parity with _inertify: transient top-layer UI never belongs in a
      // static thumb.
      clone.querySelectorAll('[popover], dialog').forEach(el => el.remove());
      clone.querySelectorAll('iframe, audio, object, embed').forEach(el => {
        el.removeAttribute('src');
        el.removeAttribute('srcdoc');
        el.removeAttribute('data');
        el.innerHTML = '';
      });
      clone.querySelectorAll('video').forEach(el => {
        if (!el.poster) {
          el.removeAttribute('src');
          el.innerHTML = '';
          return;
        }
        const img = document.createElement('img');
        img.src = el.poster;
        img.alt = '';
        img.style.cssText = el.style.cssText + ';object-fit:cover;width:100%;height:100%;';
        img.className = el.className;
        el.replaceWith(img);
      });
      // Images: defer decode and let the browser pick the smallest
      // srcset candidate for the ~140px thumb. Same-URL clones reuse the
      // slide's decoded bitmap (URL-keyed cache), so the remaining cost
      // is paint/composite — lazy+async keeps that off the main thread.
      clone.querySelectorAll('img').forEach(el => {
        el.loading = 'lazy';
        el.decoding = 'async';
        if (el.srcset) el.sizes = (this._railPx || 188) + 'px';
      });
      // Custom elements inside the slide would have their
      // connectedCallback fire when the clone is appended. Replace them
      // with inert boxes (_neuter) so a component-heavy deck doesn't run
      // N copies of each component's mount logic in the rail. Children
      // are preserved so layout-wrapper elements (<my-column><h2>…</h2>)
      // still show their authored content, and a shadow tree cloned along
      // via attachShadow({clonable:true}) (e.g. <image-slot>) moves onto
      // the box so the thumb shows the component's rendered content. The
      // querySelectorAll NodeList is static, so nested custom elements in
      // the moved subtree are still visited on later iterations.
      // querySelectorAll('*') returns descendants only — a custom-element
      // slide root (<my-slide>…</my-slide>) would slip through and upgrade
      // on append. Swap the root first.
      if (clone.tagName.includes('-')) clone = this._neuter(clone);
      clone.querySelectorAll('*').forEach(el => {
        if (el.tagName.includes('-')) el.replaceWith(this._neuter(el));
      });
      // Strip ids only now: a defined custom element upgrades synchronously
      // during cloneNode and re-renders on attribute callbacks, so removing
      // 'id' any earlier resets components (e.g. <image-slot> falls back to
      // its author src). Post-neuter, only inert boxes and plain elements
      // remain, where the strip is just the usual duplicate-id hygiene.
      clone.removeAttribute('id');
      clone.removeAttribute('data-deck-active');
      clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      clone.style.cssText += ';position:absolute;top:0;left:0;transform-origin:0 0;' + 'pointer-events:none;width:' + dw + 'px;height:' + dh + 'px;' + 'box-sizing:border-box;overflow:hidden;visibility:visible;opacity:1;';
      const host = document.createElement('div');
      host.style.cssText = 'position:absolute;inset:0;';
      // Clones are display-only: inert removes anything focusable inside
      // them from the tab order, so the rail's Delete/Backspace handler
      // can never see a (retargeted) key press from cloned content.
      host.inert = true;
      this._syncThumbHostAttrs(host);
      const sr = host.attachShadow({
        mode: 'open'
      });
      if (this._adoptedSheet) sr.adoptedStyleSheets = [this._adoptedSheet];else {
        const st = document.createElement('style');
        st.textContent = this._authorCss || '';
        sr.appendChild(st);
      }
      sr.appendChild(clone);
      entry.frame.appendChild(host);
      entry.host = host;
      entry.clone = clone;
      if (this._thumbScale) clone.style.transform = 'scale(' + this._thumbScale + ')';
      // Once materialized the IO callback is a no-op early-return —
      // unobserve so scroll doesn't keep firing it.
      if (this._railObserver) this._railObserver.unobserve(entry.frame);
    }

    /** Replace a cloned custom element with an inert box (see the comment
     *  in _materialize). A shadow tree cloned along via {clonable:true}
     *  moves onto the box, so the thumb shows the component's real content
     *  with zero component logic; :host rules in the moved <style> match
     *  the box, and the preserved data-* attrs keep :host([data-…])
     *  selectors working. */
    _neuter(el) {
      // Adopt the shadow only when the cloned root carries renderable
      // content. A constructor-attach / connectedCallback-render component
      // clones into an empty (or style-only) slotless root — adopting that
      // would hide the light children the box is about to receive and drop
      // the placeholder chrome. Such components fall back to the plain box.
      let sr = el.shadowRoot;
      if (sr) {
        let renderable = false;
        for (let n = sr.firstElementChild; n; n = n.nextElementSibling) {
          const t = n.tagName;
          if (t !== 'STYLE' && t !== 'LINK') {
            renderable = true;
            break;
          }
        }
        if (!renderable) sr = null;
      }
      const box = document.createElement('div');
      box.style.cssText = (el.getAttribute('style') || '') + (sr ? '' : ';background:rgba(0,0,0,0.06);border:1px dashed rgba(0,0,0,0.15);');
      box.className = el.className;
      // Preserve theming/i18n hooks so [data-*] / :lang() / [dir]
      // descendant selectors still match the neutered root — but not
      // pointer-interaction transients (a mid-reframe/mid-drag re-clone
      // would render the interaction chrome statically in the thumb).
      for (const a of el.attributes) {
        const n = a.name;
        if (n === 'data-reframe' || n === 'data-panning' || n === 'data-over') continue;
        if (n.startsWith('data-') || n.startsWith('aria-') || n === 'lang' || n === 'dir' || n === 'role' || n === 'title') {
          box.setAttribute(n, a.value);
        }
      }
      while (el.firstChild) box.appendChild(el.firstChild);
      if (sr) this._adoptShadow(box, sr);
      return box;
    }

    /** Move a cloned shadow tree onto a neutered thumbnail box: attach an
     *  open root on the box, carry adoptedStyleSheets, move the children,
     *  then make the content inert. */
    _adoptShadow(box, sr) {
      let root;
      try {
        root = box.attachShadow({
          mode: 'open'
        });
      } catch (e) {
        return;
      }
      // Engine-cloned shadow roots never carry adoptedStyleSheets, but a
      // defined component's clone is upgrade-rebuilt (constructor runs
      // during cloneNode), so sheets it adopts there are present and
      // shared by reference — carry them.
      if (sr.adoptedStyleSheets && sr.adoptedStyleSheets.length) {
        try {
          root.adoptedStyleSheets = Array.prototype.slice.call(sr.adoptedStyleSheets);
        } catch (e) {}
      }
      // Clone rather than move: moving preserves listeners an upgraded
      // clone's constructor attached inside its shadow; cloning sheds
      // them, keeping thumbs free of component logic categorically.
      for (let n = sr.firstChild; n; n = n.nextSibling) {
        root.appendChild(n.cloneNode(true));
      }
      this._inertify(root);
    }

    /** Strip anything executable from copied shadow content and apply the
     *  same custom-element/media/img policy as the light-DOM clone.
     *  (Canvases inside copied shadow content stay blank — there is no
     *  live↔clone pairing across shadow boundaries to snapshot from.) */
    _inertify(root) {
      root.querySelectorAll('script').forEach(s => s.remove());
      // Transient top-layer UI can never belong in a static thumb. (A
      // cloned [popover] is display:none anyway — open state doesn't
      // clone — this just makes it categorical.)
      root.querySelectorAll('[popover], dialog').forEach(el => el.remove());
      // Same heavy-media policy as the light-DOM clone above.
      root.querySelectorAll('iframe, audio, object, embed').forEach(el => {
        el.removeAttribute('src');
        el.removeAttribute('srcdoc');
        el.removeAttribute('data');
        el.innerHTML = '';
      });
      root.querySelectorAll('video').forEach(el => {
        if (!el.poster) {
          el.removeAttribute('src');
          el.innerHTML = '';
          return;
        }
        const img = document.createElement('img');
        img.src = el.poster;
        img.alt = '';
        img.style.cssText = el.style.cssText + ';object-fit:cover;width:100%;height:100%;';
        img.className = el.className;
        el.replaceWith(img);
      });
      root.querySelectorAll('*').forEach(el => {
        for (let i = el.attributes.length - 1; i >= 0; i--) {
          if (/^on/i.test(el.attributes[i].name)) {
            el.removeAttribute(el.attributes[i].name);
          }
        }
      });
      root.querySelectorAll('img').forEach(el => {
        el.loading = 'lazy';
        el.decoding = 'async';
        if (el.srcset) el.sizes = (this._railPx || 188) + 'px';
      });
      // Nested custom elements inside copied shadow content would upgrade
      // on append — same treatment as the light DOM. querySelectorAll is
      // static, so boxes created mid-walk don't re-enter this loop.
      root.querySelectorAll('*').forEach(el => {
        if (el.tagName.includes('-')) el.replaceWith(this._neuter(el));
      });
    }

    /** Re-clone a single thumb (live-update path). No-op if the thumb
     *  hasn't been materialized yet — it'll pick up current content when
     *  it scrolls into view. */
    _refreshThumb(slide) {
      const entry = (this._thumbs || []).find(t => t.slide === slide);
      if (!entry || !entry.host) return;
      entry.host.remove();
      entry.host = entry.clone = null;
      this._materialize(entry);
    }
    _scaleThumbs() {
      if (!this._thumbs || !this._thumbs.length) return;
      // Every frame is the same width; if it reads 0 the rail is
      // display:none (noscale / no-rail / presenting / print) — leave the
      // clones as-is and re-run when the rail is revealed.
      const fw = this._thumbs[0].frame.offsetWidth;
      if (!fw) return;
      this._thumbScale = fw / this.designWidth;
      this._thumbs.forEach(({
        clone
      }) => {
        if (clone) clone.style.transform = 'scale(' + this._thumbScale + ')';
      });
    }
    _setDrop(i, where) {
      // dragover fires at pointer-event rate; touch only the previous
      // and new target rather than sweeping all N thumbs.
      const t = this._thumbs && this._thumbs[i];
      if (this._dropOn && this._dropOn !== t) {
        this._dropOn.thumb.removeAttribute('data-drop');
      }
      if (t) t.thumb.setAttribute('data-drop', where);
      this._dropOn = t || null;
    }
    _clearDrop() {
      if (this._dropOn) this._dropOn.thumb.removeAttribute('data-drop');
      this._dropOn = null;
    }
    _syncRail(follow) {
      if (!this._thumbs) return;
      this._thumbs.forEach(({
        thumb
      }, i) => {
        if (i === this._index) {
          thumb.setAttribute('data-current', '');
          if (follow && typeof thumb.scrollIntoView === 'function') {
            thumb.scrollIntoView({
              block: 'nearest'
            });
          }
        } else {
          thumb.removeAttribute('data-current');
        }
      });
    }
    _openMenu(i, x, y) {
      if (!this._menu) return;
      this._menuIndex = i;
      const slide = this._slides[i];
      // Right-clicking a thumb OUTSIDE the selection collapses the
      // selection to that thumb (platform convention) — the menu then
      // always targets exactly what's highlighted.
      if (this._selected.size && slide && !this._selected.has(slide)) {
        this._selected.clear();
        this._selected.add(slide);
        this._selAnchor = slide;
        this._syncSelection();
      }
      const sel = this._selectionIndices();
      const bulk = sel.length > 1;
      this._menuIndices = bulk ? sel : [i];
      // Bulk mode offers only the one batched op that exists (delete);
      // the single-slide items address one index and stay hidden.
      this._menu.querySelectorAll('[data-act="skip"], [data-act="up"], [data-act="down"], [data-act="duplicate"], hr').forEach(el => {
        el.style.display = bulk ? 'none' : '';
      });
      const skip = slide && slide.hasAttribute('data-deck-skip');
      this._menu.querySelector('[data-act="skip"]').textContent = skip ? 'Unskip slide' : 'Skip slide';
      this._menu.querySelector('[data-act="up"]').disabled = i <= 0;
      this._menu.querySelector('[data-act="down"]').disabled = i >= this._slides.length - 1;
      const del = this._menu.querySelector('[data-act="delete"]');
      del.textContent = bulk ? 'Delete ' + sel.length + ' slides' : 'Delete slide';
      del.disabled = bulk ? sel.length >= this._slides.length : this._slides.length <= 1;
      // Place, then clamp to viewport after it's measurable.
      this._menu.style.left = x + 'px';
      this._menu.style.top = y + 'px';
      this._menu.setAttribute('data-open', '');
      const r = this._menu.getBoundingClientRect();
      const nx = Math.min(x, window.innerWidth - r.width - 4);
      const ny = Math.min(y, window.innerHeight - r.height - 4);
      this._menu.style.left = Math.max(4, nx) + 'px';
      this._menu.style.top = Math.max(4, ny) + 'px';
    }
    _closeMenu() {
      if (this._menu) this._menu.removeAttribute('data-open');
      this._menuIndex = -1;
      this._menuIndices = null;
    }
    _openConfirm(sel) {
      if (!this._confirm) return;
      const list = Array.isArray(sel) ? sel : [sel];
      // Hold the slide ELEMENTS: the deck can re-render while the dialog
      // is open (collaborator/agent edit), and a frozen index list would
      // then address the wrong slides — a same-count reorder even passes
      // the host's witness guard. Elements re-resolve at danger-click.
      this._confirmEls = list.map(i => this._slides[i]).filter(Boolean);
      this._confirm.querySelector('.title').textContent = list.length === 1 ? 'Delete slide ' + (list[0] + 1) + '?' : 'Delete ' + list.length + ' slides?';
      this._confirm.querySelector('.msg').textContent = list.length === 1 ? 'This slide will be removed from the deck.' : 'These slides will be removed from the deck.';
      this._confirm.setAttribute('data-open', '');
      const btn = this._confirm.querySelector('.danger');
      if (btn && btn.focus) btn.focus();
    }
    _closeConfirm() {
      if (this._confirm) this._confirm.removeAttribute('data-open');
      this._confirmEls = null;
    }

    /** Return focus to the current slide's thumb so the keyboard flow
     *  (Delete → Enter → Delete …) survives the confirm dialog closing.
     *  Without 'force', skipped while a structural op is in flight
     *  (_railLock): _index is then an optimistic post-op value that
     *  doesn't address the pre-op thumb list — _pendingRailRefocus stays
     *  armed and the ack/slotchange paths call back with force once the
     *  rail reflects the op. Skipped (and disarmed) while the rail is
     *  inert (hidden / presenting). */
    _focusCurrentThumb(force) {
      if (!force && this._railLock) return;
      this._pendingRailRefocus = false;
      // Never yank focus from content the user reached meanwhile (e.g.
      // an input inside a slide during the ack round-trip) — only
      // reclaim it from the rail's own surfaces, or from nowhere.
      const ae = this._root && this._root.activeElement;
      const ours = !ae || this._rail && this._rail.contains(ae) || this._confirm && this._confirm.contains(ae) || this._menu && this._menu.contains(ae);
      const lightAe = document.activeElement;
      const lightOk = !lightAe || lightAe === document.body || lightAe === this;
      if (!ours || !lightOk) return;
      const cur = this._thumbs && this._thumbs[this._index];
      if (cur && this._rail && !this._rail.inert) cur.thumb.focus({
        preventScroll: true
      });
    }

    /** Selection as sorted slide indices. An empty explicit selection
     *  means the current slide (the rail's implicit selection). */
    _selectionIndices() {
      const out = [];
      this._slides.forEach((s, i) => {
        if (this._selected.has(s)) out.push(i);
      });
      if (!out.length && this._slides[this._index]) out.push(this._index);
      return out;
    }
    _clearSelection() {
      // Re-anchor before the early return: a plain click followed by
      // arrow/tap navigation leaves _selected empty but the anchor
      // pointing at the old slide, and a later shift-click would range
      // from there instead of the current slide.
      this._selAnchor = null;
      if (!this._selected.size) return;
      this._selected.clear();
      this._syncSelection();
    }
    _syncSelection() {
      (this._thumbs || []).forEach(t => {
        if (this._selected.has(t.slide)) t.thumb.setAttribute('data-selected', '');else t.thumb.removeAttribute('data-selected');
      });
    }

    /** Rail mutations. When a dc-runtime is present (`window.__dcUpdate`)
     *  the host owns the light DOM — handlers emit a dc-op only and the
     *  host applies it (to the editor's model or to the source file) and
     *  re-renders via dc-runtime; slotchange catches the rail up.
     *  Structural ops lock rail input until the host acks so a rapid second
     *  click can't address a stale index; setAttr/removeAttr respect the
     *  lock but don't set it (indices unchanged; the host serializes).
     *  `newIndex` is written to location.hash so slotchange's
     *  _restoreIndex lands on the right slide.
     *
     *  With NO dc-runtime (a raw .html deck), there's no re-render path,
     *  so handlers self-mutate locally for an instant update and emit
     *  `emitOnly: false`; the host persists to disk without
     *  re-rendering over the already-mutated DOM.
     *
     *  See docs/dc-ops.md for the contract. */
    /** True when the page's DC runtime reports a live template stream for
     *  any component here (newer support.js bundles only — older bundles
     *  lack the signal and the HOST-side gate covers those decks). Rail
     *  mutations are refused for the duration: a mid-stream op addresses
     *  slide indices the stream is rewriting underneath the click. */
    _streamActive() {
      try {
        return !!window.__dcUpdate && typeof window.__dcStreaming === 'function' && window.__dcStreaming();
      } catch (e) {
        return false;
      }
    }

    /** Transient in-stage notice for a refused mid-stream rail op. */
    _showStreamNotice() {
      this._showNotice('Claude is still updating this deck — try again when it finishes.');
    }

    /** Transient bottom-center toast for a refused rail gesture. */
    _showNotice(text) {
      if (!this._root) return;
      let n = this._streamNotice;
      if (!n) {
        n = document.createElement('div');
        n.className = 'export-hidden';
        n.setAttribute('data-omelette-chrome', '');
        n.setAttribute('role', 'status');
        n.style.cssText = 'position:fixed;left:50%;bottom:24px;transform:translateX(-50%);' + 'background:rgba(22,22,22,.94);color:#fff;' + 'font:500 13px/1.4 system-ui,sans-serif;padding:8px 14px;' + 'border-radius:8px;z-index:2147483646;pointer-events:none;' + 'opacity:0;transition:opacity .15s ease';
        this._root.append(n);
        this._streamNotice = n;
      }
      n.textContent = text;
      n.style.opacity = '1';
      if (this._streamNoticeTimer) clearTimeout(this._streamNoticeTimer);
      this._streamNoticeTimer = setTimeout(() => {
        n.style.opacity = '0';
      }, 2600);
    }
    _emitDcOp(op, slide, lock, newIndex) {
      // Mid-stream guard: refuse the gesture outright — no lock, no
      // optimistic index change, no emit, no self-mutation (returning
      // true short-circuits every caller). The host applies the same
      // gate for decks whose committed support.js predates the signal.
      if (this._streamActive()) {
        this._showStreamNotice();
        return true;
      }
      // Slide index (template/script/style filtered — same as
      // _collectSlides). deck-stage is a filtered-index dc-op emitter;
      // the host resolves against findDeckStage().slideTids. Callers
      // already pass `to` as a slide index.
      op.at = this._slides.indexOf(slide);
      op.witness = {
        childCount: this._slides.length
      };
      // dc-runtime wraps an <x-import>-mounted component in a
      // <div class="sc-host-x" data-dc-tpl="N"> host — the stamp is on the
      // WRAPPER, not this element. closest() finds it (or this element's
      // own stamp when directly templated).
      const host = this.closest('[data-dc-tpl]');
      const tid = host && host.getAttribute('data-dc-tpl');
      op.mount = {
        tid: tid !== null ? parseInt(tid, 10) : null,
        tag: 'deck-stage'
      };
      op.emitOnly = !!window.__dcUpdate;
      if (op.emitOnly) {
        if (lock) this._railLock = true;
        if (newIndex != null && newIndex !== this._index) {
          this._indexBeforeEmit = this._index;
          this._index = newIndex;
          try {
            history.replaceState(null, '', '#' + (newIndex + 1));
          } catch (e) {}
        }
      }
      this.dispatchEvent(new CustomEvent('dc-op', {
        detail: op,
        bubbles: true,
        composed: true
      }));
      return op.emitOnly;
    }

    /** Delete a set of slides (pre-op indices). One slide delegates to
     *  _deleteSlide — the plain 'remove' op — so single deletes keep
     *  working against hosts that predate 'removeMany'. A bulk delete is
     *  ONE op: one host write, one undo snapshot, and indices that all
     *  address the same pre-op deck (N acked single ops would each need
     *  a fresh witness). */
    _deleteSlides(list) {
      if (this._railLock || !list) return;
      const indices = [...new Set(list)].filter(i => this._slides[i]).sort((a, b) => a - b);
      if (!indices.length || indices.length >= this._slides.length) return;
      if (indices.length === 1) {
        this._deleteSlide(indices[0]);
        return;
      }
      // Mirrors _duplicateSlide: check the stream gate before doing any
      // work (_emitDcOp re-checks).
      if (this._streamActive()) {
        this._showStreamNotice();
        return;
      }
      const els = indices.map(i => this._slides[i]);
      const del = new Set(indices);
      const cur = this._index;
      // New current index in post-op space: shift the kept slide left by
      // the deletions below it; if the current slide itself is deleted,
      // land on the nearest survivor (after, else before).
      const below = n => indices.reduce((k, x) => k + (x < n ? 1 : 0), 0);
      let ni;
      if (!del.has(cur)) {
        ni = cur - below(cur);
      } else {
        let s = -1;
        for (let j = cur + 1; j < this._slides.length; j++) {
          if (!del.has(j)) {
            s = j;
            break;
          }
        }
        if (s === -1) {
          for (let j = cur - 1; j >= 0; j--) {
            if (!del.has(j)) {
              s = j;
              break;
            }
          }
        }
        ni = s < 0 ? 0 : s - below(s);
      }
      // Emit-path deletes can't refocus until the host re-renders; arm
      // the flag at emit time (never on a refused/no-op path) so
      // ack/slotchange can finish the keyboard flow's focus hand-back.
      // The local path clears it via the caller's _focusCurrentThumb().
      this._pendingRailRefocus = true;
      if (this._emitDcOp({
        op: 'removeMany',
        indices
      }, els[0], true, ni)) return;
      this._index = ni;
      this._squelchSlotChange = true;
      els.forEach(el => el.remove());
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _deleteSlide(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide || this._slides.length <= 1) return;
      const cur = this._index;
      const ni = i < cur || i === cur && i === this._slides.length - 1 ? cur - 1 : cur;
      this._pendingRailRefocus = true;
      if (this._emitDcOp({
        op: 'remove'
      }, slide, true, ni)) return;
      this._index = ni;
      this._squelchSlotChange = true;
      slide.remove();
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _duplicateSlide(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide) return;
      // Mint ids + copy component state BEFORE emitting, so the op can
      // carry the id map — but never mint for an op the stream gate is
      // about to refuse (_emitDcOp re-checks; this avoids orphaned keys).
      if (this._streamActive()) {
        this._showStreamNotice();
        return;
      }
      const copy = slide.cloneNode(true);
      copy.removeAttribute('id');
      const ids = this._remintDuplicateIds(copy);
      const op = {
        op: 'duplicate'
      };
      if (ids) op.ids = ids;
      if (this._emitDcOp(op, slide, true, i + 1)) return;
      this._index = i + 1;
      this._squelchSlotChange = true;
      this.insertBefore(copy, slide.nextSibling);
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }

    /** Duplicate id policy. Plain ids are stripped — two live slides must
     *  not share one id. But a component that KEYS persistent state by id
     *  (image-slot's sidecar photo) would silently lose that state with
     *  its id. Such a component opts out of the strip by exposing a
     *  static cloneSlot(fromId, isFree) that copies its stored state
     *  under a fresh id of its choosing and returns that id. The old→new
     *  map is returned (or null) and rides the dc-op so the host writes
     *  the SAME ids into source — without that, the copy's state would
     *  revert on reload (docs/dc-ops.md). */
    _remintDuplicateIds(copy) {
      const ids = {};
      let found = false;
      const used = new Set();
      const idOk = /^[A-Za-z][\w-]{0,63}$/;
      const isFree = id => idOk.test(id) && !used.has(id) && !document.getElementById(id);
      copy.querySelectorAll('[id]').forEach(el => {
        const tag = el.tagName.toLowerCase();
        const cls = tag.indexOf('-') >= 0 && customElements.get(tag);
        let next = null;
        if (el.id && cls && typeof cls.cloneSlot === 'function') {
          try {
            next = cls.cloneSlot(el.id, isFree);
          } catch (e) {}
        }
        // Re-checked here so a misbehaving static can't smuggle a dupe
        // or an unsafe value into the document / the emitted op.
        if (typeof next === 'string' && isFree(next)) {
          ids[el.id] = next;
          used.add(next);
          el.id = next;
          found = true;
        } else {
          el.removeAttribute('id');
        }
      });
      return found ? ids : null;
    }
    _toggleSkip(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide) return;
      const on = !slide.hasAttribute('data-deck-skip');
      if (this._emitDcOp(on ? {
        op: 'setAttr',
        attr: 'data-deck-skip',
        value: ''
      } : {
        op: 'removeAttr',
        attr: 'data-deck-skip'
      }, slide, false)) return;
      if (on) slide.setAttribute('data-deck-skip', '');else slide.removeAttribute('data-deck-skip');
    }
    _skippedIndices() {
      const out = [];
      for (let i = 0; i < this._slides.length; i++) {
        if (this._slides[i].hasAttribute('data-deck-skip')) out.push(i);
      }
      return out;
    }
    _moveSlide(i, j) {
      if (this._railLock || j < 0 || j >= this._slides.length || j === i) return;
      const cur = this._index;
      const ni = cur === i ? j : i < cur && j >= cur ? cur - 1 : i > cur && j <= cur ? cur + 1 : cur;
      const slide = this._slides[i];
      if (this._emitDcOp({
        op: 'move',
        to: j
      }, slide, true, ni)) return;
      const ref = j < i ? this._slides[j] : this._slides[j].nextSibling;
      this._index = ni;
      this._squelchSlotChange = true;
      this.insertBefore(slide, ref);
      this._collectSlides();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'mutation'
      });
    }

    // Public API ------------------------------------------------------------

    /** Current slide index (0-based). */
    get index() {
      return this._index;
    }
    /** Total slide count. */
    get length() {
      return this._slides.length;
    }
    /** Programmatically navigate. */
    goTo(i) {
      this._go(i, 'api');
    }
    next() {
      this._advance(1, 'api');
    }
    prev() {
      this._advance(-1, 'api');
    }
    reset() {
      this._go(0, 'api');
    }
  }
  if (!customElements.get('deck-stage')) {
    customElements.define('deck-stage', DeckStage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/zing-investor-deck/templates/investor-deck/deck-stage.js", error: String((e && e.message) || e) }); }

// export/zing-investor-deck/templates/investor-deck/ds-base.js
try { (() => {
// Loads this design system into the template. In a consuming project, point
// base at the bound DS folder relative to this file (e.g. '_ds/<folder>' at
// the project root, '../_ds/<folder>' one level down) — one line to edit.
(() => {
  const base = '../..';
  for (const p of ["tokens/fonts.css", "tokens/colors.css", "tokens/typography.css", "tokens/spacing.css", "tokens/base.css", "components/components.css", "styles.css"]) {
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = base + '/' + p;
    document.head.appendChild(l);
  }
  const s = document.createElement('script');
  s.src = base + '/_ds_bundle.js';
  s.onerror = () => console.error('ds-base.js: failed to load ' + s.src + ' — if this is a consuming project, point the base line in ds-base.js at the bound _ds/<folder> tree relative to this page (e.g. _ds/<folder> at the project root, ../_ds/<folder> one level down); in a fresh design system this can just mean the bundle is not compiled yet');
  document.head.appendChild(s);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/zing-investor-deck/templates/investor-deck/ds-base.js", error: String((e && e.message) || e) }); }

// export/zing-investor-deck/templates/investor-deck/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(0,0,0,.12);border-top-color:rgba(0,0,0,.45);' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/zing-investor-deck/templates/investor-deck/image-slot.js", error: String((e && e.message) || e) }); }

// export/zing-investor-deck/ui_kits/resident-scheduling/app.jsx
try { (() => {
/* Zing Resident App · hero task grid + floating availability bar that opens a
   dedicated full-page time picker.
   Tabs: Home · Your bookings · Profile.
   Home = browse tasks/packages (2-col grid, toggle) and add to cart; a compact
   bar hovers above the nav showing the running total + 5-day availability
   (green/red dot + tint). Tapping it opens a chrome-less booking page (back
   button only) to place the visit on the calendar and reserve. */
const {
  useState,
  useMemo,
  useEffect
} = React;
const {
  ICONS,
  TASKS,
  TASK_BY_ID,
  PACKAGES,
  startToday,
  addBusinessDays,
  fmtDayLabel,
  fmtDateLabel,
  fmtTime,
  fmtDur,
  busyFor,
  snapValid,
  firstFit,
  fits,
  P,
  LineIcon,
  AppBar,
  BottomNav,
  Segmented,
  TaskCard,
  GhostCard,
  PackageCard,
  DayChips,
  TimelineLegend,
  Timeline
} = window;
const FREQS = ["One-time", "Weekly", "Bi-weekly", "Monthly"];
const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const MONTHS_FULL = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const WEEK = 5;
const BUSINESS_DAYS = Array.from({
  length: 45
}, (_, i) => addBusinessDays(startToday(), i));
const FIVE = BUSINESS_DAYS.slice(0, 5);
const monthLabel = (a, b) => a.getMonth() === b.getMonth() ? `${MONTHS_FULL[a.getMonth()]} ${a.getFullYear()}` : `${MONTHS[a.getMonth()]} – ${MONTHS[b.getMonth()]} ${b.getFullYear()}`;
const titleOf = items => items.length === 1 ? items[0].name : `${items[0].name} + ${items.length - 1} more`;

/* ============================ Package detail sheet ============================ */
function PackageModal({
  pkg,
  added,
  onClose,
  onAdd
}) {
  const tasks = pkg.tasks.map(id => TASK_BY_ID[id]);
  const dur = tasks.reduce((s, t) => s + t.dur, 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: "sheet__close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.close,
    w: 16
  })), /*#__PURE__*/React.createElement("h3", {
    className: "sheet__title"
  }, pkg.name), /*#__PURE__*/React.createElement("div", {
    className: "sheet__price"
  }, "$", pkg.price, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--ink-500)"
    }
  }, "/ visit")), /*#__PURE__*/React.createElement("div", {
    className: "sheet__dur"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.clock,
    w: 14
  }), " About ", fmtDur(dur), " per visit"), /*#__PURE__*/React.createElement("p", {
    className: "sheet__desc"
  }, "A curated bundle handled in one visit.", pkg.off ? " Save up to 15% on recurring orders." : ""), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "2px 2px 18px"
    }
  }, tasks.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    className: "citem"
  }, /*#__PURE__*/React.createElement("div", {
    className: "citem__icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: ICONS + t.icon,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "citem__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "citem__name"
  }, t.name), /*#__PURE__*/React.createElement("div", {
    className: "citem__meta"
  }, "~", fmtDur(t.dur))), /*#__PURE__*/React.createElement("div", {
    className: "citem__price"
  }, "$", t.price)))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary btn--block",
    onClick: () => onAdd(pkg)
  }, added ? "Remove from cart" : "Add package to cart")));
}

/* ============================ Floating availability bar ============================ */
function FloatingBar({
  cart,
  dayIdx,
  setDayIdx,
  onOpen
}) {
  const dur = cart.reduce((s, c) => s + c.dur, 0);

  // Auto-track availability: always land on the earliest day that fits the current
  // visit. Adding tasks pushes forward past full days; removing tasks pulls back to
  // a sooner opening.
  useEffect(() => {
    if (dur === 0) return;
    const firstAvail = BUSINESS_DAYS.findIndex(d => firstFit(busyFor(d), dur) != null);
    if (firstAvail >= 0 && firstAvail !== dayIdx) setDayIdx(firstAvail);
  }, [dur]);

  // 5-day preview window that always keeps the selected day in view.
  const winStart = dayIdx < WEEK ? 0 : Math.min(dayIdx, BUSINESS_DAYS.length - WEEK);
  const days = BUSINESS_DAYS.slice(winStart, winStart + WEEK);
  const date = BUSINESS_DAYS[dayIdx];
  const active = dur > 0;
  return /*#__PURE__*/React.createElement("div", {
    className: "fbar",
    onClick: onOpen
  }, /*#__PURE__*/React.createElement("div", {
    className: "fbar__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fbar__total"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fbar__ic"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.clock,
    w: 17
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fbar__big"
  }, active ? `~${fmtDur(dur)}` : "No tasks yet"), /*#__PURE__*/React.createElement("div", {
    className: "fbar__sub"
  }, active ? `${cart.length} ${cart.length === 1 ? "task" : "tasks"} · Tap to pick a time` : "Add tasks to build a visit"))), /*#__PURE__*/React.createElement("div", {
    className: "fbar__day"
  }, /*#__PURE__*/React.createElement("b", null, fmtDayLabel(date)), /*#__PURE__*/React.createElement("span", null, fmtDateLabel(date)))), /*#__PURE__*/React.createElement(DayChips, {
    days: days,
    idx: dayIdx - winStart,
    onPick: i => {
      setDayIdx(winStart + i);
      onOpen();
    },
    dur: dur
  }));
}

/* ============================ Dedicated booking page ============================ */
function BookingPage({
  cart,
  dayIdx,
  setDayIdx,
  onBack,
  onReserve
}) {
  const dur = cart.reduce((s, c) => s + c.dur, 0);
  const date = BUSINESS_DAYS[dayIdx];
  const busy = useMemo(() => busyFor(date), [dayIdx]);
  const [selStart, setSelStart] = useState(null);
  const [weekStart, setWeekStart] = useState(Math.floor(dayIdx / WEEK) * WEEK);
  const active = dur > 0;
  useEffect(() => {
    if (dur === 0) {
      setSelStart(null);
      return;
    }
    setSelStart(prev => prev != null && fits(busy, prev, dur) ? prev : firstFit(busy, dur));
  }, [dur, dayIdx]);
  const weekDays = BUSINESS_DAYS.slice(weekStart, weekStart + WEEK);
  const localSel = dayIdx - weekStart;
  const goWeek = delta => {
    const ns = weekStart + delta * WEEK;
    if (ns < 0 || ns >= BUSINESS_DAYS.length) return;
    setWeekStart(ns);
    setDayIdx(Math.min(BUSINESS_DAYS.length - 1, ns + dayIdx % WEEK));
  };
  const pick = raw => {
    const s = snapStart(busy, raw, dur);
    if (s != null) setSelStart(s);
  };
  const nudge = d => {
    if (selStart == null) return;
    const n = selStart + d;
    if (fits(busy, n, dur)) setSelStart(n);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "bookpage page-anim"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bookhead"
  }, /*#__PURE__*/React.createElement("div", {
    className: "subhead"
  }, /*#__PURE__*/React.createElement("button", {
    className: "back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.left,
    w: 20
  })), /*#__PURE__*/React.createElement("h2", null, "Pick your time")), /*#__PURE__*/React.createElement("div", {
    className: "visitbar",
    style: {
      marginTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "visitbar__ring"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.clock,
    w: 30,
    sw: 1.4
  })), /*#__PURE__*/React.createElement("div", {
    className: "visitbar__t"
  }, /*#__PURE__*/React.createElement("div", {
    className: "visitbar__big"
  }, active ? `~${fmtDur(dur)}` : "No tasks yet"), /*#__PURE__*/React.createElement("div", {
    className: "visitbar__sub"
  }, active ? `${cart.length} ${cart.length === 1 ? "task" : "tasks"} · one visit` : "Add tasks on the home screen"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "weeknav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "weeknav__arrow",
    onClick: () => goWeek(-1),
    disabled: weekStart === 0,
    "aria-label": "Previous week"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.left,
    w: 18
  })), /*#__PURE__*/React.createElement("div", {
    className: "weeknav__label"
  }, /*#__PURE__*/React.createElement("b", null, monthLabel(weekDays[0], weekDays[weekDays.length - 1])), /*#__PURE__*/React.createElement("span", null, weekStart === 0 ? "This week" : `${MONTHS[weekDays[0].getMonth()]} ${weekDays[0].getDate()} – ${MONTHS[weekDays[weekDays.length - 1].getMonth()]} ${weekDays[weekDays.length - 1].getDate()}`)), /*#__PURE__*/React.createElement("button", {
    className: "weeknav__arrow",
    onClick: () => goWeek(1),
    disabled: weekStart + WEEK >= BUSINESS_DAYS.length,
    "aria-label": "Next week"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.right,
    w: 18
  }))), /*#__PURE__*/React.createElement(DayChips, {
    days: weekDays,
    idx: localSel,
    onPick: i => setDayIdx(weekStart + i),
    dur: dur,
    variant: "page"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(TimelineLegend, {
    booking: active
  }), active && /*#__PURE__*/React.createElement("div", {
    className: "pickcue"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.clock,
    w: 15
  }), " Tap an open slot or drag your visit to set a time"), !active && /*#__PURE__*/React.createElement("div", {
    className: "bookhint"
  }, "Add a task on the home screen to reserve \u2014 you can still preview open slots below."))), /*#__PURE__*/React.createElement("div", {
    className: "bookcal"
  }, /*#__PURE__*/React.createElement("div", {
    key: dayIdx,
    className: "slide-anim"
  }, /*#__PURE__*/React.createElement(Timeline, {
    busy: busy,
    dur: active ? dur : null,
    selStart: active ? selStart : null,
    onPick: active ? pick : null,
    onDragStart: active ? pick : null,
    showOpen: true
  })), active && selStart == null && /*#__PURE__*/React.createElement("div", {
    className: "stepper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stepper__lbl"
  }, "No open block fits this visit \u2014 try another day (red = full)."))), /*#__PURE__*/React.createElement("div", {
    className: "stickyfoot stickyfoot--page"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary btn--block",
    disabled: active && selStart == null,
    onClick: () => active ? onReserve({
      date,
      start: selStart,
      dur
    }) : onBack()
  }, active ? selStart != null ? `Continue – ${fmtTime(selStart)} to ${fmtTime(selStart + dur)}` : "Pick a time on the calendar" : "Add a task to reserve")));
}

/* ============================ Faux Apple Pay sheet ============================ */
const FACE_ID = "M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2";
function ApplePaySheet({
  amount,
  onCancel,
  onDone
}) {
  const [stage, setStage] = useState("auth");
  useEffect(() => {
    const t = setTimeout(() => setStage("ok"), 1700);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    if (stage === "ok") {
      const t = setTimeout(onDone, 950);
      return () => clearTimeout(t);
    }
  }, [stage]);
  return /*#__PURE__*/React.createElement("div", {
    className: "ap-scrim",
    onClick: onCancel
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-sheet",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("span", {
    className: "ap-side"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ap-grab"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ap-head"
  }, /*#__PURE__*/React.createElement("b", null, "Apple Pay"), /*#__PURE__*/React.createElement("button", {
    className: "ap-x",
    onClick: onCancel
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "ap-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-row__ic"
  }, "ZING"), /*#__PURE__*/React.createElement("div", {
    className: "ap-row__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-row__t"
  }, "Zing \xB7 Bezel Miami"), /*#__PURE__*/React.createElement("div", {
    className: "ap-row__s"
  }, "Apartment 1925"))), /*#__PURE__*/React.createElement("div", {
    className: "ap-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-row__ic",
    style: {
      background: "linear-gradient(135deg,#1a1a2e,#39507a)"
    }
  }, "VISA"), /*#__PURE__*/React.createElement("div", {
    className: "ap-row__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-row__t"
  }, "Visa  \xB7\xB7\xB7\xB7  4242"), /*#__PURE__*/React.createElement("div", {
    className: "ap-row__s"
  }, "Default Card")), /*#__PURE__*/React.createElement("span", {
    className: "ap-row__chev"
  }, "\u203A")), /*#__PURE__*/React.createElement("div", {
    className: "ap-row ap-row--total"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-row__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-row__t"
  }, "Pay Zing")), /*#__PURE__*/React.createElement("div", {
    className: "ap-amt"
  }, "$", amount.toFixed(2))), /*#__PURE__*/React.createElement("div", {
    className: "ap-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-face" + (stage === "ok" ? " ap-face--ok" : "")
  }, stage === "ok" ? /*#__PURE__*/React.createElement(LineIcon, {
    d: P.check,
    w: 26,
    sw: 2.4
  }) : /*#__PURE__*/React.createElement("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: FACE_ID
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 10v1.2M15 10v1.2M12 10v2.6l-1 .8M9.6 15.2c.7.6 1.5.9 2.4.9s1.7-.3 2.4-.9"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ap-cta"
  }, stage === "ok" ? "Done" : "Double-Click to Pay"))));
}

/* ============================ Checkout ============================ */
const ENTRY_OPTS = ["I'll be home", "The door's unlocked — come on in", "Use the Zing Access Station"];
const FREQ_SUB = {
  "One-time": "",
  "Weekly": "Save 15%",
  "Bi-weekly": "Save 10%",
  "Monthly": "Save 5%"
};
const FREQ_OFF = {
  "One-time": 0,
  "Weekly": 0.15,
  "Bi-weekly": 0.10,
  "Monthly": 0.05
};
function Checkout({
  cart,
  booking,
  freq,
  setFreq,
  onBack,
  onPlaceOrder
}) {
  const subtotal = cart.reduce((s, c) => s + c.price, 0);
  const [tip, setTip] = useState({
    mode: "pct",
    pct: 18
  });
  const [coupon, setCoupon] = useState("");
  const [applied, setApplied] = useState(null);
  const [entry, setEntry] = useState("");
  const [notes, setNotes] = useState("");
  const [pay, setPay] = useState("apple");
  const [card, setCard] = useState({
    num: "",
    exp: "",
    cvc: "",
    zip: ""
  });
  const [apOpen, setApOpen] = useState(false);
  const tipAmt = tip.mode === "pct" ? Math.round(subtotal * tip.pct) / 100 : tip.mode === "custom" ? parseFloat(tip.custom) || 0 : 0;
  const planOff = Math.round(subtotal * FREQ_OFF[freq] * 100) / 100;
  const discount = applied ? Math.round(subtotal * 0.1 * 100) / 100 : 0;
  const total = Math.max(0, subtotal - planOff - discount + tipAmt);
  const cardOk = card.num.replace(/\s/g, "").length >= 12 && card.exp.length >= 4 && card.cvc.length >= 3;
  const ready = entry !== "" && (pay === "apple" || cardOk);
  const place = () => onPlaceOrder({
    tip: tipAmt,
    discount,
    total,
    freq,
    entry,
    notes,
    pay: pay === "apple" ? "Apple Pay" : "Visa ····4242"
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "bookpage page-anim"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cohead"
  }, /*#__PURE__*/React.createElement("div", {
    className: "subhead"
  }, /*#__PURE__*/React.createElement("button", {
    className: "back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.left,
    w: 20
  })), /*#__PURE__*/React.createElement("h2", null, "Last step")), /*#__PURE__*/React.createElement("div", {
    className: "recap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "recap__ic"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.cal,
    w: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "recap__t"
  }, fmtDayLabel(booking.date), ", ", fmtDateLabel(booking.date), " \xB7 ", fmtTime(booking.start), "\u2013", fmtTime(booking.start + booking.dur)), /*#__PURE__*/React.createElement("div", {
    className: "recap__s"
  }, cart.length, " ", cart.length === 1 ? "task" : "tasks", " \xB7 ~", fmtDur(booking.dur), " \xB7 Bezel Miami 1925")))), /*#__PURE__*/React.createElement("div", {
    className: "cobody"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card card--active"
  }, /*#__PURE__*/React.createElement("div", {
    className: "secttl"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.refresh,
    w: 17
  }), " How often?"), /*#__PURE__*/React.createElement("div", {
    className: "freqgrid"
  }, FREQS.map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    className: freq === f ? "freqgrid__on" : "",
    onClick: () => setFreq(f)
  }, f, FREQ_SUB[f] ? /*#__PURE__*/React.createElement("span", {
    className: "freqgrid__sub"
  }, FREQ_SUB[f]) : null)))), /*#__PURE__*/React.createElement("div", {
    className: "card" + (entry ? " card--active" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "secttl"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.home,
    w: 17
  }), " How will we get in?"), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "selectwrap"
  }, /*#__PURE__*/React.createElement("select", {
    value: entry,
    onChange: e => setEntry(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select an option\u2026"), ENTRY_OPTS.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))))), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, "Any entry or special instructions?"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Knock before entering, friendly dog inside\u2026",
    value: notes,
    onChange: e => setNotes(e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "card" + (tip.mode !== "none" && (tip.mode === "pct" || tipAmt > 0) ? " card--active" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "secttl"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.spark,
    w: 17
  }), " Add a tip for your Zing cleaner"), /*#__PURE__*/React.createElement("div", {
    className: "tiprow"
  }, [15, 18, 20].map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    className: "tipbtn" + (tip.mode === "pct" && tip.pct === p ? " tipbtn--on" : ""),
    onClick: () => setTip({
      mode: "pct",
      pct: p
    })
  }, p, "%", /*#__PURE__*/React.createElement("small", null, "$", (Math.round(subtotal * p) / 100).toFixed(2))))), /*#__PURE__*/React.createElement("div", {
    className: "tipcustom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tipcustom__wrap"
  }, /*#__PURE__*/React.createElement("span", null, "$"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    inputMode: "decimal",
    placeholder: "Add a custom amount",
    value: tip.mode === "custom" ? tip.custom || "" : "",
    onChange: e => setTip({
      mode: "custom",
      custom: e.target.value.replace(/[^0-9.]/g, "")
    })
  }))), /*#__PURE__*/React.createElement("button", {
    className: "notip" + (tip.mode === "none" ? " notip--on" : ""),
    onClick: () => setTip({
      mode: "none"
    })
  }, "No tip")), /*#__PURE__*/React.createElement("div", {
    className: "card card--active"
  }, /*#__PURE__*/React.createElement("div", {
    className: "secttl"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.cart,
    w: 17
  }), " Payment"), /*#__PURE__*/React.createElement("div", {
    className: "paymethod"
  }, /*#__PURE__*/React.createElement("div", {
    className: "payopt" + (pay === "apple" ? " payopt--on" : ""),
    onClick: () => setPay("apple")
  }, /*#__PURE__*/React.createElement("div", {
    className: "payopt__radio"
  }), /*#__PURE__*/React.createElement("div", {
    className: "payopt__label"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.6 12.7c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.7-1.3-.13-2.5.77-3.1.77-.62 0-1.65-.75-2.7-.73-1.4.02-2.67.8-3.38 2.05-1.44 2.5-.37 6.2 1.04 8.23.69 1 1.5 2.1 2.57 2.06 1.03-.04 1.42-.66 2.67-.66 1.24 0 1.6.66 2.69.64 1.11-.02 1.81-1 2.49-2 .78-1.15 1.1-2.26 1.12-2.32-.02-.01-2.15-.83-2.17-3.25zM15.5 6.3c.56-.7.95-1.62.84-2.55-.81.03-1.8.54-2.39 1.23-.52.6-.98 1.58-.86 2.48.9.07 1.83-.46 2.41-1.16z"
  })), "Apple Pay"), /*#__PURE__*/React.createElement("span", {
    className: "payopt__hint"
  }, "Fastest")), /*#__PURE__*/React.createElement("div", {
    className: "payopt" + (pay === "card" ? " payopt--on" : ""),
    onClick: () => setPay("card")
  }, /*#__PURE__*/React.createElement("div", {
    className: "payopt__radio"
  }), /*#__PURE__*/React.createElement("div", {
    className: "payopt__label"
  }, "Credit or debit card"))), pay === "card" && /*#__PURE__*/React.createElement("div", {
    className: "cardform"
  }, /*#__PURE__*/React.createElement("input", {
    className: "full",
    placeholder: "Card number",
    inputMode: "numeric",
    value: card.num,
    onChange: e => setCard({
      ...card,
      num: e.target.value
    })
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "MM / YY",
    inputMode: "numeric",
    value: card.exp,
    onChange: e => setCard({
      ...card,
      exp: e.target.value
    })
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "CVC",
    inputMode: "numeric",
    value: card.cvc,
    onChange: e => setCard({
      ...card,
      cvc: e.target.value
    })
  }), /*#__PURE__*/React.createElement("input", {
    className: "full",
    placeholder: "Billing ZIP",
    inputMode: "numeric",
    value: card.zip,
    onChange: e => setCard({
      ...card,
      zip: e.target.value
    })
  }))), /*#__PURE__*/React.createElement("div", {
    className: "card" + (applied ? " card--active" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "secttl"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.bag,
    w: 17
  }), " Have a coupon code?"), /*#__PURE__*/React.createElement("div", {
    className: "coupon"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Enter coupon code",
    value: coupon,
    onChange: e => setCoupon(e.target.value.toUpperCase())
  }), /*#__PURE__*/React.createElement("button", {
    disabled: !coupon.trim(),
    onClick: () => setApplied(coupon.trim())
  }, "Apply")), applied && /*#__PURE__*/React.createElement("div", {
    className: "coupon__ok"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.check,
    w: 15,
    sw: 2
  }), " \u201C", applied, "\u201D applied \xB7 10% off")), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement("b", null, "$", subtotal.toFixed(2))), planOff > 0 && /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, freq, " plan (", Math.round(FREQ_OFF[freq] * 100), "% off)"), /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--success-600)"
    }
  }, "\u2212$", planOff.toFixed(2))), discount > 0 && /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, "Coupon"), /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--success-600)"
    }
  }, "\u2212$", discount.toFixed(2))), /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, "Tip", tip.mode === "pct" ? ` (${tip.pct}%)` : ""), /*#__PURE__*/React.createElement("b", null, "$", tipAmt.toFixed(2))), /*#__PURE__*/React.createElement("div", {
    className: "totalrow totalrow--grand"
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", {
    className: "amt"
  }, "$", total.toFixed(2)))), pay === "apple" ? /*#__PURE__*/React.createElement("button", {
    className: "applebtn",
    disabled: !ready,
    style: !ready ? {
      opacity: .45
    } : null,
    onClick: () => ready && setApOpen(true)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.6 12.7c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.7-1.3-.13-2.5.77-3.1.77-.62 0-1.65-.75-2.7-.73-1.4.02-2.67.8-3.38 2.05-1.44 2.5-.37 6.2 1.04 8.23.69 1 1.5 2.1 2.57 2.06 1.03-.04 1.42-.66 2.67-.66 1.24 0 1.6.66 2.69.64 1.11-.02 1.81-1 2.49-2 .78-1.15 1.1-2.26 1.12-2.32-.02-.01-2.15-.83-2.17-3.25zM15.5 6.3c.56-.7.95-1.62.84-2.55-.81.03-1.8.54-2.39 1.23-.52.6-.98 1.58-.86 2.48.9.07 1.83-.46 2.41-1.16z"
  })), "Pay") : /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary btn--block",
    disabled: !ready,
    onClick: place
  }, "Place order \xB7 $", total.toFixed(2)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      fontSize: 11.5,
      color: "var(--ink-500)",
      marginTop: 12,
      lineHeight: 1.5
    }
  }, "You won't be charged until your visit is complete. We'll text you to confirm timing.")), apOpen && /*#__PURE__*/React.createElement(ApplePaySheet, {
    amount: total,
    onCancel: () => setApOpen(false),
    onDone: () => {
      setApOpen(false);
      place();
    }
  }));
}

/* ============================ Info sheet (task / package description) ============================ */
function InfoSheet({
  item,
  onClose
}) {
  const isPkg = !!item.tasks;
  const tasks = isPkg ? item.tasks.map(id => TASK_BY_ID[id]).filter(Boolean) : [];
  const dur = isPkg ? tasks.reduce((s, t) => s + t.dur, 0) : item.dur;
  return /*#__PURE__*/React.createElement("div", {
    className: "scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: "sheet__close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.close,
    w: 16
  })), /*#__PURE__*/React.createElement("div", {
    className: "sheet__icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: ICONS + item.icon,
    alt: ""
  })), /*#__PURE__*/React.createElement("h3", {
    className: "sheet__title"
  }, item.name), /*#__PURE__*/React.createElement("div", {
    className: "sheet__meta"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.clock,
    w: 14
  }), " About ", fmtDur(dur), isPkg ? " / visit" : ""), /*#__PURE__*/React.createElement("span", {
    className: "sheet__dot"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, isPkg ? `$${item.price} / visit` : `From $${item.price}`)), /*#__PURE__*/React.createElement("p", {
    className: "sheet__desc"
  }, item.desc), isPkg && /*#__PURE__*/React.createElement("div", {
    className: "infolist"
  }, /*#__PURE__*/React.createElement("div", {
    className: "infolist__ttl"
  }, "What's included"), tasks.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    className: "infolist__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "infolist__dot"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.check,
    w: 12,
    sw: 2.2
  })), /*#__PURE__*/React.createElement("span", {
    className: "infolist__name"
  }, t.name), /*#__PURE__*/React.createElement("span", {
    className: "infolist__dur"
  }, "~", fmtDur(t.dur)))), item.off && /*#__PURE__*/React.createElement("div", {
    className: "infolist__save"
  }, "Save up to 15% on recurring orders")), !isPkg && item.steps && /*#__PURE__*/React.createElement("div", {
    className: "infolist"
  }, /*#__PURE__*/React.createElement("div", {
    className: "infolist__ttl"
  }, "Options"), item.steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "infolist__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "infolist__name"
  }, s.label), /*#__PURE__*/React.createElement("span", {
    className: "infolist__dur"
  }, "~", fmtDur(s.dur)), /*#__PURE__*/React.createElement("span", {
    className: "infolist__price"
  }, "$", s.price)))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--ghost btn--block",
    onClick: onClose,
    style: {
      marginTop: 4
    }
  }, "Got it")));
}

/* ============================ Home (hero grid + floating bar) ============================ */
function Home({
  cart,
  dayIdx,
  setDayIdx,
  onTaskClick,
  onStep,
  onInfo,
  onTogglePkg,
  onOpenBooking
}) {
  const [mode, setMode] = useState("tasks");
  const itemBy = Object.fromEntries(cart.map(c => [c.taskId, c]));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pad page-anim",
    style: {
      paddingBottom: 222
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hi"
  }, "Hello, Whit ", /*#__PURE__*/React.createElement("span", {
    className: "wave"
  }, "\uD83D\uDC4B")), /*#__PURE__*/React.createElement("h1", null, "Book your clean.")), /*#__PURE__*/React.createElement(Segmented, {
    mode: mode,
    setMode: setMode
  }), mode === "tasks" ? /*#__PURE__*/React.createElement("div", {
    className: "grid"
  }, TASKS.map(t => /*#__PURE__*/React.createElement(TaskCard, {
    key: t.id,
    task: t,
    item: itemBy[t.id],
    onToggle: onTaskClick,
    onStep: onStep,
    onInfo: onInfo
  })), /*#__PURE__*/React.createElement(GhostCard, {
    icon: /*#__PURE__*/React.createElement(LineIcon, {
      d: P.plus,
      w: 26
    }),
    title: "Create Custom Task",
    sub: "Tell us what you need",
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(GhostCard, {
    icon: /*#__PURE__*/React.createElement(LineIcon, {
      d: P.phone,
      w: 24
    }),
    title: "Request a Call",
    sub: "Get a custom quote",
    onClick: () => {}
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "blurb"
  }, "Save time, skip the guesswork. Choose a pre-built bundle that fits your routine and let Zing handle the rest."), /*#__PURE__*/React.createElement("div", {
    className: "pgrid"
  }, PACKAGES.map(p => /*#__PURE__*/React.createElement(PackageCard, {
    key: p.id,
    pkg: p,
    inCart: p.tasks.every(id => itemBy[id]),
    onToggle: onTogglePkg,
    onInfo: onInfo
  })), /*#__PURE__*/React.createElement(GhostCard, {
    icon: /*#__PURE__*/React.createElement(LineIcon, {
      d: P.plus,
      w: 26
    }),
    title: "Build Custom Package",
    sub: "Choose your own tasks",
    onClick: () => setMode("tasks")
  }), /*#__PURE__*/React.createElement(GhostCard, {
    icon: /*#__PURE__*/React.createElement(LineIcon, {
      d: P.phone,
      w: 24
    }),
    title: "Request a Call",
    sub: "Get a custom quote",
    onClick: () => {}
  }))))), /*#__PURE__*/React.createElement(FloatingBar, {
    cart: cart,
    dayIdx: dayIdx,
    setDayIdx: setDayIdx,
    onOpen: onOpenBooking
  }));
}

/* ============================ Your bookings ============================ */
function bookingRow(b, done) {
  const d = b.date;
  return /*#__PURE__*/React.createElement("div", {
    key: b.id,
    className: "upcoming" + (done ? " upcoming--done" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "upcoming__date"
  }, /*#__PURE__*/React.createElement("b", null, d.getDate()), /*#__PURE__*/React.createElement("span", null, MONTHS[d.getMonth()])), /*#__PURE__*/React.createElement("div", {
    className: "upcoming__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "upcoming__t"
  }, b.title), /*#__PURE__*/React.createElement("div", {
    className: "upcoming__s"
  }, fmtDayLabel(d), " \xB7 ", fmtTime(b.start), " \u2013 ", fmtTime(b.start + b.dur))), /*#__PURE__*/React.createElement("span", {
    className: "vtag" + (done ? " vtag--done" : "")
  }, done ? "Done" : b.freq === "One-time" ? "Booked" : b.freq));
}
function Bookings({
  bookings,
  onBrowse
}) {
  const subs = bookings.filter(b => b.freq !== "One-time");
  const completed = [{
    id: "c1",
    title: "Vacuum & Floor Magic",
    date: addBusinessDays(startToday(), -6),
    start: 600,
    dur: 40,
    freq: "One-time"
  }, {
    id: "c2",
    title: "Zing Bathroom Clean (Full) + 1 more",
    date: addBusinessDays(startToday(), -11),
    start: 540,
    dur: 75,
    freq: "Weekly"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pad page-anim"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "page-title"
  }, "Your bookings"), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card__head"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.cal,
    w: 18
  }), " Upcoming visits"), bookings.length ? bookings.map(b => bookingRow(b, false)) : /*#__PURE__*/React.createElement("div", {
    className: "visitcard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "visitcard__ico"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.cal,
    w: 24
  })), /*#__PURE__*/React.createElement("p", null, "No upcoming visits."), /*#__PURE__*/React.createElement("a", {
    onClick: onBrowse
  }, "Book a clean \u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card__head"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.refresh,
    w: 18
  }), " Subscriptions"), subs.length ? subs.map(b => /*#__PURE__*/React.createElement("div", {
    key: b.id,
    className: "upcoming"
  }, /*#__PURE__*/React.createElement("div", {
    className: "upcoming__date"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.refresh,
    w: 22
  })), /*#__PURE__*/React.createElement("div", {
    className: "upcoming__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "upcoming__t"
  }, b.title), /*#__PURE__*/React.createElement("div", {
    className: "upcoming__s"
  }, b.freq, " \xB7 next ", fmtDayLabel(b.date), " ", fmtDateLabel(b.date))), /*#__PURE__*/React.createElement("span", {
    className: "vtag"
  }, b.freq))) : /*#__PURE__*/React.createElement("div", {
    className: "visitcard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "visitcard__ico"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.refresh,
    w: 24
  })), /*#__PURE__*/React.createElement("p", null, "No recurring services yet."), /*#__PURE__*/React.createElement("a", {
    onClick: onBrowse
  }, "Set up a routine \u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card__head"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.check,
    w: 18
  }), " Completed visits"), completed.map(b => bookingRow(b, true)))));
}

/* ============================ Confirmation ============================ */
function Confirm({
  booking,
  onDone
}) {
  const subtotal = booking.items.reduce((s, c) => s + c.price, 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "confirm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "confirm__badge"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.check,
    w: 38,
    sw: 1.8
  })), /*#__PURE__*/React.createElement("h2", null, "You're all set."), /*#__PURE__*/React.createElement("p", null, "Your Zing visit is reserved for ", fmtDayLabel(booking.date), ", ", fmtDateLabel(booking.date), " from ", fmtTime(booking.start), " to ", fmtTime(booking.start + booking.dur), ". We'll take it from here.")), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card__head"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.bag,
    w: 18
  }), " Your visit"), booking.items.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.uid,
    className: "citem"
  }, /*#__PURE__*/React.createElement("div", {
    className: "citem__icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: ICONS + c.icon,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "citem__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "citem__name"
  }, c.name), /*#__PURE__*/React.createElement("div", {
    className: "citem__meta"
  }, c.opt ? `${c.opt} · ` : "", "~", fmtDur(c.dur))), /*#__PURE__*/React.createElement("div", {
    className: "citem__price"
  }, "$", c.price)))), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, "When"), /*#__PURE__*/React.createElement("b", null, fmtDayLabel(booking.date), " ", fmtDateLabel(booking.date))), /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, "Time"), /*#__PURE__*/React.createElement("b", null, fmtTime(booking.start), " \u2013 ", fmtTime(booking.start + booking.dur))), /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, "Frequency"), /*#__PURE__*/React.createElement("b", null, booking.freq)), /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, "Apartment"), /*#__PURE__*/React.createElement("b", null, "Bezel Miami \xB7 1925")), /*#__PURE__*/React.createElement("div", {
    className: "totalrow totalrow--grand"
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", {
    className: "amt"
  }, "$", subtotal))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary btn--block",
    onClick: onDone
  }, "Book another clean")));
}

/* ============================ Profile ============================ */
function Profile() {
  return /*#__PURE__*/React.createElement("div", {
    className: "scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pad page-anim"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "page-title"
  }, "Your profile"), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card__head"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.user,
    w: 18
  }), " Personal information"), /*#__PURE__*/React.createElement("label", {
    className: "plabel"
  }, "Full name"), /*#__PURE__*/React.createElement("input", {
    className: "pinput",
    defaultValue: "Whit"
  }), /*#__PURE__*/React.createElement("label", {
    className: "plabel"
  }, "Phone number"), /*#__PURE__*/React.createElement("input", {
    className: "pinput",
    defaultValue: "770 656 0139"
  }), /*#__PURE__*/React.createElement("label", {
    className: "plabel"
  }, "Apartment"), /*#__PURE__*/React.createElement("input", {
    className: "pinput",
    defaultValue: "Bezel Miami \xB7 1925"
  }), /*#__PURE__*/React.createElement("label", {
    className: "plabel"
  }, "Pets info"), /*#__PURE__*/React.createElement("input", {
    className: "pinput",
    placeholder: "e.g. friendly dog, please keep the bedroom door closed"
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary btn--block",
    style: {
      marginTop: 4
    }
  }, "Save changes")), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card__head"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.cart,
    w: 18
  }), " Payment methods"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--ink-600)",
      margin: "0 0 14px"
    }
  }, "You have no saved cards."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--ghost btn--block"
  }, "Add new card")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--danger btn--block"
  }, "Log out")));
}

/* ============================ App ============================ */
function App() {
  // Demo boot via URL: ?preset=booking → three chores in cart, opens on Pick-a-Time
  const presetCart = useMemo(() => {
    let p;
    try {
      p = new URLSearchParams(location.search).get("preset");
    } catch (e) {
      p = null;
    }
    if (p !== "booking") return null;
    return ["dusting", "trash", "dishes"].map(id => TASK_BY_ID[id]).filter(Boolean).map(t => {
      const s = t.steps ? t.steps[0] : null;
      return {
        uid: t.id,
        taskId: t.id,
        name: t.name,
        price: s ? s.price : t.price,
        dur: s ? s.dur : t.dur,
        icon: t.icon,
        stepIdx: 0,
        opt: s ? s.label : null,
        note: ""
      };
    });
  }, []);
  const [tab, setTab] = useState("home");
  const [view, setView] = useState(presetCart ? "booking" : "app"); // "app" | "booking" | "checkout"
  const [dayIdx, setDayIdx] = useState(() => {
    if (!presetCart) return 0;
    const dur = presetCart.reduce((s, c) => s + c.dur, 0);
    const i = BUSINESS_DAYS.findIndex(d => firstFit(busyFor(d), dur) != null);
    return i >= 0 ? i : 0;
  });
  const [cart, setCart] = useState(presetCart || []);
  const [freq, setFreq] = useState("One-time");
  const [pending, setPending] = useState(null);
  const [confirmed, setConfirmed] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [infoItem, setInfoItem] = useState(null);
  const cartIds = new Set(cart.map(c => c.taskId));
  const mkItem = (t, stepIdx = 0) => {
    const s = t.steps ? t.steps[stepIdx] : null;
    return {
      uid: t.id,
      taskId: t.id,
      name: t.name,
      price: s ? s.price : t.price,
      dur: s ? s.dur : t.dur,
      icon: t.icon,
      stepIdx,
      opt: s ? s.label : null,
      note: ""
    };
  };
  const onTaskClick = task => {
    if (cartIds.has(task.id)) {
      setCart(c => c.filter(x => x.taskId !== task.id));
      return;
    }
    setCart(c => [...c, mkItem(task)]);
  };
  const stepItem = (task, delta) => setCart(c => c.map(x => {
    if (x.taskId !== task.id) return x;
    const i = Math.max(0, Math.min(task.steps.length - 1, x.stepIdx + delta));
    const s = task.steps[i];
    return {
      ...x,
      stepIdx: i,
      dur: s.dur,
      price: s.price,
      opt: s.label
    };
  }));
  const togglePkg = pkg => {
    const allIn = pkg.tasks.every(id => cartIds.has(id));
    if (allIn) setCart(c => c.filter(x => !pkg.tasks.includes(x.taskId)));else setCart(c => [...c, ...pkg.tasks.filter(id => !cartIds.has(id)).map(id => mkItem(TASK_BY_ID[id]))]);
  };
  const reserve = b => {
    setPending(b);
    setView("checkout");
  };
  const placeOrder = extra => {
    const booking = {
      id: "b" + Date.now(),
      ...pending,
      items: cart,
      freq,
      title: titleOf(cart),
      ...extra
    };
    setBookings(list => [booking, ...list]);
    setConfirmed(booking);
    setPending(null);
    setView("app");
  };
  const done = () => {
    setCart([]);
    setFreq("One-time");
    setConfirmed(null);
    setPending(null);
    setView("app");
    setTab("bookings");
  };
  const goTab = t => {
    setConfirmed(null);
    setView("app");
    setTab(t);
  };
  const chromeless = (view === "booking" || view === "checkout") && !confirmed;
  let body;
  if (confirmed) body = /*#__PURE__*/React.createElement(Confirm, {
    booking: confirmed,
    onDone: done
  });else if (view === "checkout") body = /*#__PURE__*/React.createElement(Checkout, {
    cart: cart,
    booking: pending,
    freq: freq,
    setFreq: setFreq,
    onBack: () => setView("booking"),
    onPlaceOrder: placeOrder
  });else if (view === "booking") body = /*#__PURE__*/React.createElement(BookingPage, {
    cart: cart,
    dayIdx: dayIdx,
    setDayIdx: setDayIdx,
    onBack: () => setView("app"),
    onReserve: reserve
  });else if (tab === "bookings") body = /*#__PURE__*/React.createElement(Bookings, {
    bookings: bookings,
    onBrowse: () => goTab("home")
  });else if (tab === "profile") body = /*#__PURE__*/React.createElement(Profile, null);else body = /*#__PURE__*/React.createElement(Home, {
    cart: cart,
    dayIdx: dayIdx,
    setDayIdx: setDayIdx,
    onTaskClick: onTaskClick,
    onStep: stepItem,
    onInfo: setInfoItem,
    onTogglePkg: togglePkg,
    onOpenBooking: () => setView("booking")
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "phone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "phone-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, !chromeless && /*#__PURE__*/React.createElement(AppBar, null), body, !chromeless && /*#__PURE__*/React.createElement(BottomNav, {
    tab: confirmed ? "bookings" : tab,
    setTab: goTab
  })), infoItem && /*#__PURE__*/React.createElement(InfoSheet, {
    item: infoItem,
    onClose: () => setInfoItem(null)
  })), /*#__PURE__*/React.createElement("div", {
    className: "phone-notch"
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/zing-investor-deck/ui_kits/resident-scheduling/app.jsx", error: String((e && e.message) || e) }); }

// export/zing-investor-deck/ui_kits/resident-scheduling/components.jsx
try { (() => {
/* Zing Resident App · shared components (chrome, cards, timeline) */
const {
  useState,
  useRef
} = React;
const {
  ICONS,
  TASKS,
  TASK_BY_ID,
  PACKAGES,
  DAY_START,
  DAY_END,
  HOUR_PX,
  px,
  totalHeight,
  fmtDayLabel,
  fmtDateLabel,
  fmtTime,
  fmtTimeShort,
  fmtDur,
  openWindows,
  busyFor,
  firstFit,
  startToday,
  P,
  LineIcon
} = window;

/* ---------------- App bar (co-brand + Text us) ---------------- */
function AppBar() {
  return /*#__PURE__*/React.createElement("header", {
    className: "appbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cobrand"
  }, /*#__PURE__*/React.createElement("img", {
    className: "zing",
    src: "icons/zing-logo.svg",
    alt: "Zing"
  }), /*#__PURE__*/React.createElement("div", {
    className: "divider"
  }), /*#__PURE__*/React.createElement("img", {
    className: "bezel",
    src: "icons/bezel.webp",
    alt: "Bezel Miami"
  })), /*#__PURE__*/React.createElement("button", {
    className: "textus"
  }, "Text us"));
}

/* ---------------- Bottom navigation ---------------- */
function BottomNav({
  tab,
  setTab
}) {
  const items = [{
    id: "home",
    label: "Home",
    d: P.home
  }, {
    id: "bookings",
    label: "Your bookings",
    d: P.cal
  }, {
    id: "profile",
    label: "Profile",
    d: P.user
  }];
  return /*#__PURE__*/React.createElement("nav", {
    className: "bnav"
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    className: tab === it.id ? "on" : "",
    onClick: () => setTab(it.id)
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: it.d,
    w: 23
  }), /*#__PURE__*/React.createElement("span", null, it.label))));
}

/* ---------------- Compact swipeable date strip (arrows + chips) ---------------- */
function DateStrip({
  days,
  idx,
  setIdx
}) {
  const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const trackRef = useRef(null);
  React.useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const chip = el.children[idx];
    if (chip) el.scrollTo({
      left: chip.offsetLeft - el.clientWidth / 2 + chip.clientWidth / 2,
      behavior: "smooth"
    });
  }, [idx]);
  return /*#__PURE__*/React.createElement("div", {
    className: "datestrip"
  }, /*#__PURE__*/React.createElement("button", {
    className: "datestrip__arrow",
    onClick: () => setIdx(Math.max(0, idx - 1)),
    disabled: idx === 0,
    "aria-label": "Previous day"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.left,
    w: 18
  })), /*#__PURE__*/React.createElement("div", {
    className: "datestrip__track",
    ref: trackRef
  }, days.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "dchip" + (i === idx ? " dchip--on" : ""),
    onClick: () => setIdx(i)
  }, /*#__PURE__*/React.createElement("span", null, DOW[d.getDay()]), /*#__PURE__*/React.createElement("b", null, d.getDate())))), /*#__PURE__*/React.createElement("button", {
    className: "datestrip__arrow",
    onClick: () => setIdx(Math.min(days.length - 1, idx + 1)),
    disabled: idx === days.length - 1,
    "aria-label": "Next day"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.right,
    w: 18
  })));
}

/* ---------------- Tasks / Packages segmented ---------------- */
function Segmented({
  mode,
  setMode
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "seg",
    role: "tablist"
  }, /*#__PURE__*/React.createElement("button", {
    role: "tab",
    "aria-selected": mode === "tasks",
    onClick: () => setMode("tasks")
  }, /*#__PURE__*/React.createElement("span", {
    className: "gi"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.spark,
    w: 20
  })), " Tasks"), /*#__PURE__*/React.createElement("button", {
    role: "tab",
    "aria-selected": mode === "packages",
    onClick: () => setMode("packages")
  }, /*#__PURE__*/React.createElement("span", {
    className: "gi"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.bag,
    w: 19
  })), " Packages"));
}

/* ---------------- Task card (with on-card stepper for count-based tasks) ---------------- */
function TaskCard({
  task,
  item,
  onToggle,
  onStep,
  onInfo
}) {
  const inCart = !!item;
  const stepped = inCart && task.steps;
  const price = stepped ? task.steps[item.stepIdx].price : task.price;
  const dur = stepped ? task.steps[item.stepIdx].dur : task.dur;
  return /*#__PURE__*/React.createElement("div", {
    className: "tcard" + (inCart ? " in-cart" : ""),
    onClick: () => {
      if (inCart && task.steps) return;
      onToggle(task);
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "tcard__info",
    onClick: e => {
      e.stopPropagation();
      onInfo(task);
    },
    "aria-label": "What's included"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.info,
    w: 16
  })), inCart && /*#__PURE__*/React.createElement("span", {
    className: "tcard__check",
    onClick: e => {
      e.stopPropagation();
      onToggle(task);
    }
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: inCart && task.steps ? P.close : P.check,
    w: 14,
    sw: 2
  })), /*#__PURE__*/React.createElement("div", {
    className: "tcard__icon" + (/\.png$/.test(task.icon) ? " tcard__icon--photo" : "")
  }, /*#__PURE__*/React.createElement("img", {
    src: ICONS + task.icon,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "tcard__name"
  }, task.name), stepped ? /*#__PURE__*/React.createElement("div", {
    className: "qstep",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onStep(task, -1),
    disabled: item.stepIdx === 0,
    "aria-label": "Fewer"
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    className: "qstep__lbl"
  }, task.steps[item.stepIdx].label), /*#__PURE__*/React.createElement("button", {
    onClick: () => onStep(task, 1),
    disabled: item.stepIdx === task.steps.length - 1,
    "aria-label": "More"
  }, "+")) : null, /*#__PURE__*/React.createElement("div", {
    className: "tcard__dur"
  }, "~", fmtDur(dur)), /*#__PURE__*/React.createElement("div", {
    className: "tcard__price"
  }, "$", price));
}
function GhostCard({
  icon,
  title,
  sub,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tcard tcard--ghost",
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "tcard__plus"
  }, icon), /*#__PURE__*/React.createElement("div", {
    className: "tcard__name"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "tcard__sub"
  }, sub));
}

/* ---------------- Package card ---------------- */
function PackageCard({
  pkg,
  inCart,
  onToggle,
  onInfo
}) {
  const dur = pkg.tasks.reduce((s, id) => s + (TASK_BY_ID[id] ? TASK_BY_ID[id].dur : 0), 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "pcard" + (inCart ? " in-cart" : ""),
    onClick: () => onToggle(pkg)
  }, /*#__PURE__*/React.createElement("button", {
    className: "tcard__info",
    onClick: e => {
      e.stopPropagation();
      onInfo(pkg);
    },
    "aria-label": "What's included"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.info,
    w: 16
  })), inCart && /*#__PURE__*/React.createElement("span", {
    className: "tcard__check",
    onClick: e => {
      e.stopPropagation();
      onToggle(pkg);
    }
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.check,
    w: 14,
    sw: 2
  })), /*#__PURE__*/React.createElement("div", {
    className: "pcard__icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: ICONS + pkg.icon,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "pcard__name"
  }, pkg.name), /*#__PURE__*/React.createElement("div", {
    className: "pcard__dur"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.clock,
    w: 12
  }), " ~", fmtDur(dur)), /*#__PURE__*/React.createElement("div", {
    className: "pcard__starting"
  }, "Starting at"), /*#__PURE__*/React.createElement("div", {
    className: "pcard__price"
  }, "$", pkg.price, " ", /*#__PURE__*/React.createElement("small", null, "/ visit")), pkg.off && /*#__PURE__*/React.createElement("div", {
    className: "pcard__off"
  }, "Up to 15% off for Weekly,", /*#__PURE__*/React.createElement("br", null), "Bi-Weekly, Monthly orders"));
}

/* ---------------- Date navigator ---------------- */
function DateNav({
  date,
  onPrev,
  onNext,
  canPrev,
  canNext
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "datenav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "datenav__btn",
    onClick: onPrev,
    disabled: !canPrev,
    "aria-label": "Previous day"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.left,
    w: 20
  })), /*#__PURE__*/React.createElement("div", {
    className: "datenav__label"
  }, /*#__PURE__*/React.createElement("div", {
    className: "datenav__day"
  }, fmtDayLabel(date)), /*#__PURE__*/React.createElement("div", {
    className: "datenav__date"
  }, fmtDateLabel(date))), /*#__PURE__*/React.createElement("button", {
    className: "datenav__btn",
    onClick: onNext,
    disabled: !canNext,
    "aria-label": "Next day"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.right,
    w: 20
  })));
}

/* ---------------- Week strip (5 business days) ---------------- */
function WeekStrip({
  days,
  activeKey,
  onPick,
  freeness
}) {
  const DOW = ["S", "M", "T", "W", "T", "F", "S"];
  return /*#__PURE__*/React.createElement("div", {
    className: "weekstrip"
  }, days.map(d => {
    const k = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      className: "wchip" + (k === activeKey ? " wchip--on" : ""),
      onClick: () => onPick(d)
    }, /*#__PURE__*/React.createElement("span", null, DOW[d.getDay()]), /*#__PURE__*/React.createElement("b", null, d.getDate()), /*#__PURE__*/React.createElement("i", {
      className: "wchip__free"
    }));
  }));
}

/* ---------------- Day chips (rounded, availability dot left of label) ---------------- */
function DayChips({
  days,
  idx,
  onPick,
  dur,
  variant
}) {
  const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const todayKey = startToday().toDateString();
  return /*#__PURE__*/React.createElement("div", {
    className: "fdays" + (variant === "page" ? " fdays--page" : "")
  }, days.map((d, i) => {
    let cls = "fchip";
    if (dur > 0) cls += firstFit(busyFor(d), dur) != null ? " fchip--free" : " fchip--full";
    if (i === idx) cls += " fchip--on";
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: cls,
      onClick: e => {
        e.stopPropagation();
        onPick(i);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "fchip__top"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fchip__dot"
    }), /*#__PURE__*/React.createElement("span", {
      className: "fchip__dow"
    }, d.toDateString() === todayKey ? "Today" : DOW[d.getDay()])), /*#__PURE__*/React.createElement("b", {
      className: "fchip__num"
    }, d.getDate()));
  }));
}

/* ---------------- Timeline legend ---------------- */
function TimelineLegend({
  booking
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tlhint"
  }, /*#__PURE__*/React.createElement("i", null, /*#__PURE__*/React.createElement("span", {
    className: "sw sw--free"
  }), " Open"), /*#__PURE__*/React.createElement("i", null, /*#__PURE__*/React.createElement("span", {
    className: "sw sw--busy"
  }), " Booked"), booking && /*#__PURE__*/React.createElement("i", null, /*#__PURE__*/React.createElement("span", {
    className: "sw sw--sel"
  }), " Your visit"));
}

/* ---------------- The day timeline ---------------- */
function Timeline({
  busy,
  dur,
  selStart,
  onPick,
  onDragStart,
  showOpen
}) {
  const trackRef = useRef(null);
  const dragRef = useRef(null);
  const hours = [];
  for (let h = DAY_START / 60; h <= DAY_END / 60; h++) hours.push(h);
  const handleTap = e => {
    if (!onPick) return;
    const rect = trackRef.current.getBoundingClientRect();
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    const minutes = DAY_START + y / HOUR_PX * 60;
    onPick(minutes);
  };
  const selDown = e => {
    if (!onDragStart) return;
    e.stopPropagation();
    const rect = trackRef.current.getBoundingClientRect();
    const py = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    dragRef.current = {
      grab: py - px(selStart)
    };
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (_) {}
  };
  const selMove = e => {
    if (!dragRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const py = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    const startMin = DAY_START + (py - dragRef.current.grab) / HOUR_PX * 60;
    onDragStart(startMin);
  };
  const selUp = () => {
    dragRef.current = null;
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "timeline"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tl-gutter",
    style: {
      height: totalHeight
    }
  }, hours.map(h => /*#__PURE__*/React.createElement("div", {
    key: h,
    className: "hr",
    style: {
      top: px(h * 60)
    }
  }, fmtTimeShort(h * 60)))), /*#__PURE__*/React.createElement("div", {
    className: "tl-track",
    ref: trackRef,
    style: {
      height: totalHeight
    },
    onClick: handleTap
  }, hours.map(h => /*#__PURE__*/React.createElement("div", {
    key: "g" + h,
    className: "tl-grid",
    style: {
      top: px(h * 60)
    }
  })), hours.slice(0, -1).map(h => /*#__PURE__*/React.createElement("div", {
    key: "gh" + h,
    className: "tl-grid tl-grid--half",
    style: {
      top: px(h * 60 + 30)
    }
  })), showOpen && openWindows(busy).filter(w => w.end - w.start >= 30).map((w, i) => {
    const h = px(w.end) - px(w.start);
    const covered = selStart != null && dur != null && selStart < w.end && selStart + dur > w.start;
    return /*#__PURE__*/React.createElement("div", {
      key: "o" + i,
      className: "tl-open",
      style: {
        top: px(w.start),
        height: h - 3
      }
    }, h >= 26 && !covered && /*#__PURE__*/React.createElement("span", {
      className: "tl-open__lbl"
    }, "Open \xB7 ", fmtDur(w.end - w.start)));
  }), busy.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: "b" + i,
    className: "tl-busy",
    style: {
      top: px(b.start),
      height: px(b.end) - px(b.start) - 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-busy__lbl"
  }, b.label), px(b.end) - px(b.start) > 34 && /*#__PURE__*/React.createElement("span", {
    className: "tl-busy__sub"
  }, fmtTimeShort(b.start), "\u2013", fmtTimeShort(b.end), " \xB7 ", b.unit))), selStart != null && dur != null && /*#__PURE__*/React.createElement("div", {
    className: "tl-sel" + (onDragStart ? " tl-sel--drag" : ""),
    style: {
      top: px(selStart),
      height: px(selStart + dur) - px(selStart) - 3
    },
    onPointerDown: selDown,
    onPointerMove: selMove,
    onPointerUp: selUp,
    onPointerCancel: selUp
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-sel__grip tl-sel__grip--top"
  }), /*#__PURE__*/React.createElement("div", {
    className: "tl-sel__time"
  }, fmtTime(selStart), " \u2013 ", fmtTime(selStart + dur)), /*#__PURE__*/React.createElement("div", {
    className: "tl-sel__dur"
  }, onDragStart ? "Click or drag \u00b7 " : "", fmtDur(dur)), /*#__PURE__*/React.createElement("span", {
    className: "tl-sel__grip tl-sel__grip--bot"
  }))));
}
Object.assign(window, {
  AppBar,
  BottomNav,
  DateStrip,
  DayChips,
  Segmented,
  TaskCard,
  GhostCard,
  PackageCard,
  DateNav,
  WeekStrip,
  TimelineLegend,
  Timeline
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/zing-investor-deck/ui_kits/resident-scheduling/components.jsx", error: String((e && e.message) || e) }); }

// export/zing-investor-deck/ui_kits/resident-scheduling/data.jsx
try { (() => {
/* Zing Resident App · data + helpers + line icons
   Exposed on window for the other Babel scripts. */

const ICONS = "icons/";

/* ---- Service catalogue (matches the live Tasks menu) ---- */
const TASKS = [{
  id: "bathroom",
  name: "Zing Bathroom Clean (Full)",
  price: 35,
  dur: 45,
  icon: "bathroom.webp",
  desc: "Making bathrooms sparkle like a 5-star hotel. Toilet + sink scrub, shower & tub scrub, floors swept and mopped, mirrors wiped, surfaces disinfected and trash emptied.",
  opt: {
    label: "How many bathrooms?",
    noun: "bathrooms"
  },
  steps: [{
    label: "1 bathroom",
    dur: 45,
    price: 35
  }, {
    label: "2 bathrooms",
    dur: 75,
    price: 60
  }, {
    label: "3 bathrooms",
    dur: 105,
    price: 85
  }]
}, {
  id: "floor",
  name: "Vacuum & Floor Magic",
  price: 40,
  dur: 40,
  icon: "floor_magic.webp",
  desc: "A full-apartment vacuum and mop. Floors left spotless, streak-free and quietly fresh.",
  opt: {
    label: "Apartment size",
    noun: "home"
  },
  steps: [{
    label: "1 bedroom",
    dur: 40,
    price: 40
  }, {
    label: "2 bedroom",
    dur: 55,
    price: 55
  }, {
    label: "3 bedroom",
    dur: 70,
    price: 70
  }]
}, {
  id: "dusting",
  name: "Surface Dusting",
  price: 30,
  dur: 30,
  icon: "countertop.webp",
  desc: "Shelves, sills, tables and electronics gently dusted and wiped down throughout your space."
}, {
  id: "trash",
  name: "Trash & Recycling Run",
  price: 1,
  dur: 10,
  icon: "trash.webp",
  desc: "We gather, sort and take out the trash and recycling, and reline every bin."
}, {
  id: "balcony",
  name: "Balcony Refresh",
  price: 32,
  dur: 35,
  icon: "balcony.webp",
  desc: "Sweep, wipe and tidy your balcony — railings, floor and furniture left guest-ready."
}, {
  id: "windows",
  name: "Complete Window Cleaning",
  price: 12,
  dur: 30,
  icon: "window.webp",
  desc: "Interior glass and sills cleaned to a clear, streak-free shine.",
  opt: {
    label: "How many windows?",
    noun: "windows"
  },
  steps: [{
    label: "Up to 3 windows",
    dur: 30,
    price: 12
  }, {
    label: "4\u20136 windows",
    dur: 45,
    price: 20
  }, {
    label: "7\u201310 windows",
    dur: 60,
    price: 30
  }]
}, {
  id: "plants",
  name: "Watering Plants",
  price: 3,
  dur: 10,
  icon: "plants.webp",
  desc: "We water and check on your plants so everything stays lush while life is busy."
}, {
  id: "couch",
  name: "Couch & Throw Pillow Refresh",
  price: 3,
  dur: 15,
  icon: "couch.webp",
  desc: "Cushions fluffed, throws folded and the sofa reset to a calm, hotel-lobby tidy."
}, {
  id: "bed",
  name: "Bed Linen Refresh",
  price: 8,
  dur: 20,
  icon: "bed.webp",
  desc: "Fresh, crisp linens and a tightly-made bed — turned down like a suite."
}, {
  id: "dishes",
  name: "Dish Washing",
  price: 13,
  dur: 25,
  icon: "dishes.webp",
  desc: "Dishes washed, dried and put away, sink wiped down and left gleaming."
}, {
  id: "fridge",
  name: "Fridge Cleanout",
  price: 35,
  dur: 40,
  icon: "fridge.webp",
  desc: "Interior wiped, shelves cleaned and expired items cleared — fresh and organised."
}, {
  id: "oven",
  name: "Zing Oven Clean",
  price: 35,
  dur: 45,
  icon: "oven.webp",
  desc: "A deep degrease of the oven interior, racks and glass door, back to like-new."
}, {
  id: "spill",
  name: "Wine & Coffee Spill Treatment",
  price: 9,
  dur: 20,
  icon: "spill.webp",
  desc: "Fast, gentle treatment of fresh wine, coffee and food stains on fabric and floors."
}, {
  id: "laundry",
  name: "Zing Laundry Service",
  price: 15,
  dur: 50,
  icon: "laundry.webp",
  desc: "Wash and dry a load of laundry with premium detergent and fabric care.",
  opt: {
    label: "How many loads?",
    noun: "loads"
  },
  steps: [{
    label: "1 load",
    dur: 50,
    price: 15
  }, {
    label: "2 loads",
    dur: 85,
    price: 28
  }, {
    label: "3 loads",
    dur: 120,
    price: 40
  }]
}, {
  id: "folding",
  name: "Clothes Folding",
  price: 16,
  dur: 25,
  icon: "folding.webp",
  desc: "Clean laundry neatly folded and stacked, hotel-housekeeping style."
}, {
  id: "groceries",
  name: "Put Away Groceries",
  price: 3,
  dur: 15,
  icon: "groceries.webp",
  desc: "We unpack and organise your delivery into pantry and fridge so it's ready to use."
}, {
  id: "deodorize",
  name: "Deodorizing",
  price: 5,
  dur: 10,
  icon: "deodorize.webp",
  desc: "A light, natural deodorizing pass leaves your space smelling clean and calm."
}];
const TASK_BY_ID = Object.fromEntries(TASKS.map(t => [t.id, t]));

/* ---- Packages ---- */
const PACKAGES = [{
  id: "full",
  name: "Full Apartment Clean",
  price: 116,
  off: true,
  tasks: ["bathroom", "floor", "dusting", "trash", "bed"],
  icon: "couch.webp",
  desc: "Our signature top-to-bottom reset. We clean the bathroom, vacuum and mop every floor, dust all surfaces, take out the trash and refresh the bed linens — your whole apartment handled in one visit."
}, {
  id: "kitchen",
  name: "Kitchen Commander",
  price: 89,
  off: true,
  tasks: ["dishes", "oven", "fridge", "dusting"],
  icon: "oven.webp",
  desc: "A complete kitchen reset in one visit. We wash, dry and put away the dishes, deep-degrease the oven inside and out, wipe down and declutter the fridge, and dust and sanitize every counter and surface — the whole kitchen left spotless."
}, {
  id: "weekly",
  name: "Smart Weekly Care",
  price: 67,
  off: false,
  tasks: ["dusting", "floor", "trash"],
  icon: "bathroom.webp",
  desc: "A light, regular upkeep visit to keep things effortlessly tidy — surfaces dusted, floors vacuumed and mopped, and trash taken out. Best on a weekly rhythm."
}, {
  id: "biweekly",
  name: "Smart Bi-Weekly Care",
  price: 69,
  off: false,
  tasks: ["bathroom", "floor", "dusting"],
  icon: "window.webp",
  desc: "A slightly deeper every-other-week refresh — a full bathroom clean plus floors vacuumed and mopped and all surfaces dusted. The easy middle-ground routine."
}];

/* ---- Operating hours ---- */
const DAY_START = 8 * 60; // 8:00 AM
const DAY_END = 18 * 60; // 6:00 PM
const HOUR_PX = 64; // vertical px per hour
const SNAP = 15; // minute snap
const px = min => (min - DAY_START) / 60 * HOUR_PX;
const totalHeight = (DAY_END - DAY_START) / 60 * HOUR_PX;

/* ---- Date helpers (Mon–Fri only) ---- */
const DAYNAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function startToday() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  while (d.getDay() === 0 || d.getDay() === 6) d.setDate(d.getDate() + 1);
  return d;
}
function addBusinessDays(date, n) {
  const d = new Date(date);
  let step = n >= 0 ? 1 : -1;
  let left = Math.abs(n);
  while (left > 0) {
    d.setDate(d.getDate() + step);
    if (d.getDay() !== 0 && d.getDay() !== 6) left--;
  }
  return d;
}
const dateKey = d => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
const fmtDayLabel = d => `${DAYNAMES[d.getDay()]}`;
const fmtDateLabel = d => `${MONTHS[d.getMonth()]} ${d.getDate()}`;

/* ---- Time formatting ---- */
function fmtTime(min) {
  let h = Math.floor(min / 60),
    m = min % 60;
  const ap = h >= 12 ? "PM" : "AM";
  let hh = h % 12;
  if (hh === 0) hh = 12;
  return m === 0 ? `${hh}:00 ${ap}` : `${hh}:${String(m).padStart(2, "0")} ${ap}`;
}
function fmtTimeShort(min) {
  let h = Math.floor(min / 60),
    m = min % 60;
  const ap = h >= 12 ? "p" : "a";
  let hh = h % 12;
  if (hh === 0) hh = 12;
  return m === 0 ? `${hh}${ap}` : `${hh}:${String(m).padStart(2, "0")}${ap}`;
}
function fmtDur(min) {
  const h = Math.floor(min / 60),
    m = min % 60;
  if (h === 0) return `${m} min`;
  if (m === 0) return `${h} hr`;
  return `${h} hr ${m} min`;
}

/* ---- Deterministic "already booked" blocks per day ----
   Booking load rotates so the 5-day strip always shows variety:
   ~1 in 5 days is FULL (red the moment you add anything),
   ~1 in 5 is HEAVY (only short tasks fit), the rest are OPEN. */
function seeded(n) {
  let x = Math.sin(n) * 10000;
  return x - Math.floor(x);
}
const BUSY_LABELS = ["Full apartment clean", "Bathroom deep clean", "Kitchen reset", "Vacuum & floors", "Window cleaning", "Laundry service", "Fridge cleanout", "Dusting & tidy"];
const FLOOR_ORD = ["3rd", "5th", "7th", "9th", "11th", "12th", "14th", "17th", "19th", "21st", "24th", "28th"];
function dayLoad(d) {
  const ord = Math.floor(d.getTime() / 86400000);
  const m = (ord % 5 + 5) % 5;
  if (m === 0) return "full";
  if (m === 2) return "heavy";
  return "open";
}
function busyFor(d) {
  const seed = d.getFullYear() * 1000 + d.getMonth() * 40 + d.getDate();
  const load = dayLoad(d);
  const blocks = [];
  const lbl = i => BUSY_LABELS[Math.floor(seeded(seed * 13 + i) * BUSY_LABELS.length)];
  const unit = i => FLOOR_ORD[Math.floor(seeded(seed * 17 + i) * FLOOR_ORD.length)] + " floor";
  if (load === "full") {
    // fully booked — packed wall-to-wall, no usable gap (red for anything)
    let cursor = DAY_START;
    let i = 0;
    while (cursor < DAY_END) {
      const len = (3 + Math.floor(seeded(seed * 7 + i * 5) * 4)) * SNAP; // 45–90 min
      let end = cursor + len;
      if (end > DAY_END - 30) end = DAY_END; // clamp: no leftover window
      blocks.push({
        start: cursor,
        end,
        label: lbl(i),
        unit: unit(i)
      });
      if (end >= DAY_END) break;
      cursor = end + (seeded(seed * 3 + i) < .5 ? 0 : SNAP); // 0–15 min seam
      i++;
    }
  } else if (load === "heavy") {
    // packed, leaving only 30–45 min windows — short tasks fit, bundles don't
    let cursor = DAY_START + (seeded(seed * 2) < .5 ? 0 : SNAP);
    let i = 0;
    while (cursor < DAY_END - 30) {
      const len = (4 + Math.floor(seeded(seed * 7 + i * 5) * 3)) * SNAP; // 60–90 min
      const end = Math.min(cursor + len, DAY_END);
      blocks.push({
        start: cursor,
        end,
        label: lbl(i),
        unit: unit(i)
      });
      const gap = (2 + Math.floor(seeded(seed * 11 + i * 3) * 2)) * SNAP; // 30–45 min
      cursor = end + gap;
      i++;
    }
  } else {
    // open day — a handful of scattered bookings, lots of room
    const count = 2 + Math.floor(seeded(seed) * 3); // 2–4 blocks
    let cursor = DAY_START + Math.floor(seeded(seed * 2) * 6) * SNAP;
    for (let i = 0; i < count; i++) {
      const gap = (1 + Math.floor(seeded(seed * 7 + i * 3) * 5)) * SNAP; // 15–75 min gap
      const len = (2 + Math.floor(seeded(seed * 11 + i * 5) * 5)) * SNAP; // 30–90 min
      const start = cursor + gap;
      const end = start + len;
      if (end > DAY_END - 15) break;
      blocks.push({
        start,
        end,
        label: lbl(i),
        unit: unit(i)
      });
      cursor = end;
    }
  }
  return blocks;
}

/* ---- Open windows = gaps between busy blocks within hours ---- */
function openWindows(busy) {
  const sorted = [...busy].sort((a, b) => a.start - b.start);
  const wins = [];
  let cursor = DAY_START;
  for (const b of sorted) {
    if (b.start - cursor >= SNAP) wins.push({
      start: cursor,
      end: b.start
    });
    cursor = Math.max(cursor, b.end);
  }
  if (DAY_END - cursor >= SNAP) wins.push({
    start: cursor,
    end: DAY_END
  });
  return wins;
}

/* ---- Find first valid start for a duration on a day ---- */
function firstFit(busy, dur) {
  for (const w of openWindows(busy)) {
    if (w.end - w.start >= dur) return w.start;
  }
  return null;
}
/* ---- Is a [start, start+dur) block valid (in hours, no overlap)? ---- */
function fits(busy, start, dur) {
  if (start < DAY_START || start + dur > DAY_END) return false;
  return !busy.some(b => start < b.end && start + dur > b.start);
}
/* ---- Snap an arbitrary minute to a valid start near it ---- */
function snapValid(busy, raw, dur) {
  let start = Math.round((raw - dur / 2) / SNAP) * SNAP;
  start = Math.max(DAY_START, Math.min(start, DAY_END - dur));
  if (fits(busy, start, dur)) return start;
  // search outward for nearest fitting start
  for (let step = SNAP; step <= DAY_END - DAY_START; step += SNAP) {
    if (fits(busy, start - step, dur)) return start - step;
    if (fits(busy, start + step, dur)) return start + step;
  }
  return firstFit(busy, dur);
}
/* ---- Snap a START minute (anchored at top, for tap + drag) to nearest valid ---- */
function snapStart(busy, rawStart, dur) {
  let start = Math.round(rawStart / SNAP) * SNAP;
  start = Math.max(DAY_START, Math.min(start, DAY_END - dur));
  if (fits(busy, start, dur)) return start;
  for (let step = SNAP; step <= DAY_END - DAY_START; step += SNAP) {
    if (fits(busy, start - step, dur)) return start - step;
    if (fits(busy, start + step, dur)) return start + step;
  }
  return firstFit(busy, dur);
}

/* ---------------- Line icons (UI chrome) ---------------- */
const P = {
  home: "M3 11l9-8 9 8M5 9.5V20h14V9.5",
  cal: "M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zM4 9.5h16M8 3.5v3M16 3.5v3",
  user: "M4.5 20a7.5 7.5 0 0 1 15 0M12 11.5a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5",
  cart: "M3 4h2.2l1.9 11.2a1.5 1.5 0 0 0 1.48 1.25h8.32a1.5 1.5 0 0 0 1.47-1.2L20.5 7H6.2M9.5 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2M17 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2",
  left: "M15 5l-7 7 7 7",
  right: "M9 5l7 7-7 7",
  close: "M6 6l12 12M18 6L6 18",
  check: "M5 12.5l4.5 4.5L19 7",
  clock: "M12 7.5v5l3 2M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18",
  plus: "M12 5v14M5 12h14",
  phone: "M6.5 3.5h3l1.2 4-2 1.4a12 12 0 0 0 4.9 4.9l1.4-2 4 1.2v3a1.6 1.6 0 0 1-1.7 1.6A15.5 15.5 0 0 1 4.9 5.2 1.6 1.6 0 0 1 6.5 3.5",
  trash: "M5 7h14M9 7V5h6v2M7 7l.8 12.2A1 1 0 0 0 8.8 20h6.4a1 1 0 0 0 1-0.8L17 7M10 11v5M14 11v5",
  refresh: "M4 11a8 8 0 0 1 13.5-4.5L20 9M20 4v5h-5M20 13a8 8 0 0 1-13.5 4.5L4 15M4 20v-5h5",
  spark: "M12 3l1.6 5L19 9.6 13.6 11 12 16l-1.6-5L5 9.6 10.4 8z",
  edit: "M4 20h4l10-10-4-4L4 16zM14 6l4 4",
  bag: "M6 8h12l-1 12H7zM9 8V6a3 3 0 0 1 6 0v2",
  info: "M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18M12 11v5M12 7.5h.01"
};
function LineIcon({
  d,
  w = 22,
  sw = 1.6,
  style
}) {
  return React.createElement("svg", {
    width: w,
    height: w,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style
  }, React.createElement("path", {
    d
  }));
}
Object.assign(window, {
  ICONS,
  TASKS,
  TASK_BY_ID,
  PACKAGES,
  DAY_START,
  DAY_END,
  HOUR_PX,
  SNAP,
  px,
  totalHeight,
  startToday,
  addBusinessDays,
  dateKey,
  fmtDayLabel,
  fmtDateLabel,
  fmtTime,
  fmtTimeShort,
  fmtDur,
  busyFor,
  openWindows,
  firstFit,
  fits,
  snapValid,
  snapStart,
  P,
  LineIcon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/zing-investor-deck/ui_kits/resident-scheduling/data.jsx", error: String((e && e.message) || e) }); }

// export/zing-resident-app/app.jsx
try { (() => {
/* Zing Resident App · hero task grid + floating availability bar that opens a
   dedicated full-page time picker.
   Tabs: Home · Your bookings · Profile.
   Home = browse tasks/packages (2-col grid, toggle) and add to cart; a compact
   bar hovers above the nav showing the running total + 5-day availability
   (green/red dot + tint). Tapping it opens a chrome-less booking page (back
   button only) to place the visit on the calendar and reserve. */
const {
  useState,
  useMemo,
  useEffect
} = React;
const {
  ICONS,
  TASKS,
  TASK_BY_ID,
  PACKAGES,
  startToday,
  addBusinessDays,
  fmtDayLabel,
  fmtDateLabel,
  fmtTime,
  fmtDur,
  busyFor,
  snapValid,
  firstFit,
  fits,
  P,
  LineIcon,
  AppBar,
  BottomNav,
  Segmented,
  TaskCard,
  GhostCard,
  PackageCard,
  DayChips,
  TimelineLegend,
  Timeline
} = window;
const {
  Onboarding
} = window;
const FREQS = ["One-time", "Weekly", "Bi-weekly", "Monthly"];
const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const MONTHS_FULL = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const WEEK = 5;
const BUSINESS_DAYS = Array.from({
  length: 45
}, (_, i) => addBusinessDays(startToday(), i));
const FIVE = BUSINESS_DAYS.slice(0, 5);
const monthLabel = (a, b) => a.getMonth() === b.getMonth() ? `${MONTHS_FULL[a.getMonth()]} ${a.getFullYear()}` : `${MONTHS[a.getMonth()]} – ${MONTHS[b.getMonth()]} ${b.getFullYear()}`;
const titleOf = items => items.length === 1 ? items[0].name : `${items[0].name} + ${items.length - 1} more`;

/* ============================ Package detail sheet ============================ */
function PackageModal({
  pkg,
  added,
  onClose,
  onAdd
}) {
  const tasks = pkg.tasks.map(id => TASK_BY_ID[id]);
  const dur = tasks.reduce((s, t) => s + t.dur, 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: "sheet__close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.close,
    w: 16
  })), /*#__PURE__*/React.createElement("h3", {
    className: "sheet__title"
  }, pkg.name), /*#__PURE__*/React.createElement("div", {
    className: "sheet__price"
  }, "$", pkg.price, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--ink-500)"
    }
  }, "/ visit")), /*#__PURE__*/React.createElement("div", {
    className: "sheet__dur"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.clock,
    w: 14
  }), " About ", fmtDur(dur), " per visit"), /*#__PURE__*/React.createElement("p", {
    className: "sheet__desc"
  }, "A curated bundle handled in one visit.", pkg.off ? " Save up to 15% on recurring orders." : ""), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "2px 2px 18px"
    }
  }, tasks.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    className: "citem"
  }, /*#__PURE__*/React.createElement("div", {
    className: "citem__icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: ICONS + t.icon,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "citem__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "citem__name"
  }, t.name), /*#__PURE__*/React.createElement("div", {
    className: "citem__meta"
  }, "~", fmtDur(t.dur))), /*#__PURE__*/React.createElement("div", {
    className: "citem__price"
  }, "$", t.price)))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary btn--block",
    onClick: () => onAdd(pkg)
  }, added ? "Remove from cart" : "Add package to cart")));
}

/* ============================ Floating availability bar ============================ */
function FloatingBar({
  cart,
  dayIdx,
  setDayIdx,
  onOpen
}) {
  const dur = cart.reduce((s, c) => s + c.dur, 0);

  // Auto-track availability: always land on the earliest day that fits the current
  // visit. Adding tasks pushes forward past full days; removing tasks pulls back to
  // a sooner opening.
  useEffect(() => {
    if (dur === 0) return;
    const firstAvail = BUSINESS_DAYS.findIndex(d => firstFit(busyFor(d), dur) != null);
    if (firstAvail >= 0 && firstAvail !== dayIdx) setDayIdx(firstAvail);
  }, [dur]);

  // 5-day preview window that always keeps the selected day in view.
  const winStart = dayIdx < WEEK ? 0 : Math.min(dayIdx, BUSINESS_DAYS.length - WEEK);
  const days = BUSINESS_DAYS.slice(winStart, winStart + WEEK);
  const date = BUSINESS_DAYS[dayIdx];
  const active = dur > 0;
  return /*#__PURE__*/React.createElement("div", {
    className: "fbar",
    onClick: onOpen
  }, /*#__PURE__*/React.createElement("div", {
    className: "fbar__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fbar__total"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fbar__ic"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.clock,
    w: 17
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fbar__big"
  }, active ? `~${fmtDur(dur)}` : "No tasks yet"), /*#__PURE__*/React.createElement("div", {
    className: "fbar__sub"
  }, active ? `${cart.length} ${cart.length === 1 ? "task" : "tasks"} · Tap to pick a time` : "Add tasks to build a visit"))), /*#__PURE__*/React.createElement("div", {
    className: "fbar__day"
  }, /*#__PURE__*/React.createElement("b", null, fmtDayLabel(date)), /*#__PURE__*/React.createElement("span", null, fmtDateLabel(date)))), /*#__PURE__*/React.createElement(DayChips, {
    days: days,
    idx: dayIdx - winStart,
    onPick: i => {
      setDayIdx(winStart + i);
      onOpen();
    },
    dur: dur
  }));
}

/* ============================ Dedicated booking page ============================ */
function BookingPage({
  cart,
  dayIdx,
  setDayIdx,
  onBack,
  onReserve
}) {
  const dur = cart.reduce((s, c) => s + c.dur, 0);
  const date = BUSINESS_DAYS[dayIdx];
  const busy = useMemo(() => busyFor(date), [dayIdx]);
  const [selStart, setSelStart] = useState(null);
  const [weekStart, setWeekStart] = useState(Math.floor(dayIdx / WEEK) * WEEK);
  const active = dur > 0;
  useEffect(() => {
    if (dur === 0) {
      setSelStart(null);
      return;
    }
    setSelStart(prev => prev != null && fits(busy, prev, dur) ? prev : firstFit(busy, dur));
  }, [dur, dayIdx]);
  const weekDays = BUSINESS_DAYS.slice(weekStart, weekStart + WEEK);
  const localSel = dayIdx - weekStart;
  const goWeek = delta => {
    const ns = weekStart + delta * WEEK;
    if (ns < 0 || ns >= BUSINESS_DAYS.length) return;
    setWeekStart(ns);
    setDayIdx(Math.min(BUSINESS_DAYS.length - 1, ns + dayIdx % WEEK));
  };
  const pick = raw => {
    const s = snapStart(busy, raw, dur);
    if (s != null) setSelStart(s);
  };
  const nudge = d => {
    if (selStart == null) return;
    const n = selStart + d;
    if (fits(busy, n, dur)) setSelStart(n);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "bookpage page-anim"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bookhead"
  }, /*#__PURE__*/React.createElement("div", {
    className: "subhead"
  }, /*#__PURE__*/React.createElement("button", {
    className: "back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.left,
    w: 20
  })), /*#__PURE__*/React.createElement("h2", null, "Pick your time")), /*#__PURE__*/React.createElement("div", {
    className: "visitbar",
    style: {
      marginTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "visitbar__ring"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.clock,
    w: 30,
    sw: 1.4
  })), /*#__PURE__*/React.createElement("div", {
    className: "visitbar__t"
  }, /*#__PURE__*/React.createElement("div", {
    className: "visitbar__big"
  }, active ? `~${fmtDur(dur)}` : "No tasks yet"), /*#__PURE__*/React.createElement("div", {
    className: "visitbar__sub"
  }, active ? `${cart.length} ${cart.length === 1 ? "task" : "tasks"} · one visit` : "Add tasks on the home screen"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "weeknav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "weeknav__arrow",
    onClick: () => goWeek(-1),
    disabled: weekStart === 0,
    "aria-label": "Previous week"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.left,
    w: 18
  })), /*#__PURE__*/React.createElement("div", {
    className: "weeknav__label"
  }, /*#__PURE__*/React.createElement("b", null, monthLabel(weekDays[0], weekDays[weekDays.length - 1])), /*#__PURE__*/React.createElement("span", null, weekStart === 0 ? "This week" : `${MONTHS[weekDays[0].getMonth()]} ${weekDays[0].getDate()} – ${MONTHS[weekDays[weekDays.length - 1].getMonth()]} ${weekDays[weekDays.length - 1].getDate()}`)), /*#__PURE__*/React.createElement("button", {
    className: "weeknav__arrow",
    onClick: () => goWeek(1),
    disabled: weekStart + WEEK >= BUSINESS_DAYS.length,
    "aria-label": "Next week"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.right,
    w: 18
  }))), /*#__PURE__*/React.createElement(DayChips, {
    days: weekDays,
    idx: localSel,
    onPick: i => setDayIdx(weekStart + i),
    dur: dur,
    variant: "page"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(TimelineLegend, {
    booking: active
  }), active && /*#__PURE__*/React.createElement("div", {
    className: "pickcue"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.clock,
    w: 15
  }), " Tap an open slot or drag your visit to set a time"), !active && /*#__PURE__*/React.createElement("div", {
    className: "bookhint"
  }, "Add a task on the home screen to reserve \u2014 you can still preview open slots below."))), /*#__PURE__*/React.createElement("div", {
    className: "bookcal"
  }, /*#__PURE__*/React.createElement("div", {
    key: dayIdx,
    className: "slide-anim"
  }, /*#__PURE__*/React.createElement(Timeline, {
    busy: busy,
    dur: active ? dur : null,
    selStart: active ? selStart : null,
    onPick: active ? pick : null,
    onDragStart: active ? pick : null,
    showOpen: true
  })), active && selStart == null && /*#__PURE__*/React.createElement("div", {
    className: "stepper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stepper__lbl"
  }, "No open block fits this visit \u2014 try another day (red = full)."))), /*#__PURE__*/React.createElement("div", {
    className: "stickyfoot stickyfoot--page"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary btn--block",
    disabled: active && selStart == null,
    onClick: () => active ? onReserve({
      date,
      start: selStart,
      dur
    }) : onBack()
  }, active ? selStart != null ? `Continue – ${fmtTime(selStart)} to ${fmtTime(selStart + dur)}` : "Pick a time on the calendar" : "Add a task to reserve")));
}

/* ============================ Faux Apple Pay sheet ============================ */
const FACE_ID = "M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2";
function ApplePaySheet({
  amount,
  onCancel,
  onDone,
  building = "Bezel Miami",
  apt = "1925"
}) {
  const [stage, setStage] = useState("auth");
  useEffect(() => {
    const t = setTimeout(() => setStage("ok"), 1700);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    if (stage === "ok") {
      const t = setTimeout(onDone, 950);
      return () => clearTimeout(t);
    }
  }, [stage]);
  return /*#__PURE__*/React.createElement("div", {
    className: "ap-scrim",
    onClick: onCancel
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-sheet",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("span", {
    className: "ap-side"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ap-grab"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ap-head"
  }, /*#__PURE__*/React.createElement("b", null, "Apple Pay"), /*#__PURE__*/React.createElement("button", {
    className: "ap-x",
    onClick: onCancel
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "ap-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-row__ic"
  }, "ZING"), /*#__PURE__*/React.createElement("div", {
    className: "ap-row__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-row__t"
  }, "Zing \xB7 ", building), /*#__PURE__*/React.createElement("div", {
    className: "ap-row__s"
  }, "Apartment ", apt))), /*#__PURE__*/React.createElement("div", {
    className: "ap-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-row__ic",
    style: {
      background: "linear-gradient(135deg,#1a1a2e,#39507a)"
    }
  }, "VISA"), /*#__PURE__*/React.createElement("div", {
    className: "ap-row__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-row__t"
  }, "Visa  \xB7\xB7\xB7\xB7  4242"), /*#__PURE__*/React.createElement("div", {
    className: "ap-row__s"
  }, "Default Card")), /*#__PURE__*/React.createElement("span", {
    className: "ap-row__chev"
  }, "\u203A")), /*#__PURE__*/React.createElement("div", {
    className: "ap-row ap-row--total"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-row__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-row__t"
  }, "Pay Zing")), /*#__PURE__*/React.createElement("div", {
    className: "ap-amt"
  }, "$", amount.toFixed(2))), /*#__PURE__*/React.createElement("div", {
    className: "ap-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-face" + (stage === "ok" ? " ap-face--ok" : "")
  }, stage === "ok" ? /*#__PURE__*/React.createElement(LineIcon, {
    d: P.check,
    w: 26,
    sw: 2.4
  }) : /*#__PURE__*/React.createElement("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: FACE_ID
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 10v1.2M15 10v1.2M12 10v2.6l-1 .8M9.6 15.2c.7.6 1.5.9 2.4.9s1.7-.3 2.4-.9"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ap-cta"
  }, stage === "ok" ? "Done" : "Double-Click to Pay"))));
}

/* ============================ Checkout ============================ */
const ENTRY_OPTS = ["I'll be home", "The door's unlocked — come on in", "Use the Zing Access Station"];
const FREQ_SUB = {
  "One-time": "",
  "Weekly": "Save 15%",
  "Bi-weekly": "Save 10%",
  "Monthly": "Save 5%"
};
const FREQ_OFF = {
  "One-time": 0,
  "Weekly": 0.15,
  "Bi-weekly": 0.10,
  "Monthly": 0.05
};
function Checkout({
  cart,
  booking,
  freq,
  setFreq,
  onBack,
  onPlaceOrder,
  profile = {
    building: "Bezel Miami",
    apt: "1925"
  }
}) {
  const subtotal = cart.reduce((s, c) => s + c.price, 0);
  const [tip, setTip] = useState({
    mode: "pct",
    pct: 18
  });
  const [coupon, setCoupon] = useState("");
  const [applied, setApplied] = useState(null);
  const [entry, setEntry] = useState("");
  const [notes, setNotes] = useState("");
  const [pay, setPay] = useState("apple");
  const [card, setCard] = useState({
    num: "",
    exp: "",
    cvc: "",
    zip: ""
  });
  const [apOpen, setApOpen] = useState(false);
  const tipAmt = tip.mode === "pct" ? Math.round(subtotal * tip.pct) / 100 : tip.mode === "custom" ? parseFloat(tip.custom) || 0 : 0;
  const planOff = Math.round(subtotal * FREQ_OFF[freq] * 100) / 100;
  const discount = applied ? Math.round(subtotal * 0.1 * 100) / 100 : 0;
  const total = Math.max(0, subtotal - planOff - discount + tipAmt);
  const cardOk = card.num.replace(/\s/g, "").length >= 12 && card.exp.length >= 4 && card.cvc.length >= 3;
  const ready = entry !== "" && (pay === "apple" || cardOk);
  const place = () => onPlaceOrder({
    tip: tipAmt,
    discount,
    total,
    freq,
    entry,
    notes,
    pay: pay === "apple" ? "Apple Pay" : "Visa ····4242"
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "bookpage page-anim"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cohead"
  }, /*#__PURE__*/React.createElement("div", {
    className: "subhead"
  }, /*#__PURE__*/React.createElement("button", {
    className: "back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.left,
    w: 20
  })), /*#__PURE__*/React.createElement("h2", null, "Last step")), /*#__PURE__*/React.createElement("div", {
    className: "recap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "recap__ic"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.cal,
    w: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "recap__t"
  }, fmtDayLabel(booking.date), ", ", fmtDateLabel(booking.date), " \xB7 ", fmtTime(booking.start), "\u2013", fmtTime(booking.start + booking.dur)), /*#__PURE__*/React.createElement("div", {
    className: "recap__s"
  }, cart.length, " ", cart.length === 1 ? "task" : "tasks", " \xB7 ~", fmtDur(booking.dur), " \xB7 ", profile.building, " ", profile.apt)))), /*#__PURE__*/React.createElement("div", {
    className: "cobody"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card card--active"
  }, /*#__PURE__*/React.createElement("div", {
    className: "secttl"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.refresh,
    w: 17
  }), " How often?"), /*#__PURE__*/React.createElement("div", {
    className: "freqgrid"
  }, FREQS.map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    className: freq === f ? "freqgrid__on" : "",
    onClick: () => setFreq(f)
  }, f, FREQ_SUB[f] ? /*#__PURE__*/React.createElement("span", {
    className: "freqgrid__sub"
  }, FREQ_SUB[f]) : null)))), /*#__PURE__*/React.createElement("div", {
    className: "card" + (entry ? " card--active" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "secttl"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.home,
    w: 17
  }), " How will we get in?"), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "selectwrap"
  }, /*#__PURE__*/React.createElement("select", {
    value: entry,
    onChange: e => setEntry(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select an option\u2026"), ENTRY_OPTS.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))))), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, "Any entry or special instructions?"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Knock before entering, friendly dog inside\u2026",
    value: notes,
    onChange: e => setNotes(e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "card" + (tip.mode !== "none" && (tip.mode === "pct" || tipAmt > 0) ? " card--active" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "secttl"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.spark,
    w: 17
  }), " Add a tip for your Zing cleaner"), /*#__PURE__*/React.createElement("div", {
    className: "tiprow"
  }, [15, 18, 20].map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    className: "tipbtn" + (tip.mode === "pct" && tip.pct === p ? " tipbtn--on" : ""),
    onClick: () => setTip({
      mode: "pct",
      pct: p
    })
  }, p, "%", /*#__PURE__*/React.createElement("small", null, "$", (Math.round(subtotal * p) / 100).toFixed(2))))), /*#__PURE__*/React.createElement("div", {
    className: "tipcustom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tipcustom__wrap"
  }, /*#__PURE__*/React.createElement("span", null, "$"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    inputMode: "decimal",
    placeholder: "Add a custom amount",
    value: tip.mode === "custom" ? tip.custom || "" : "",
    onChange: e => setTip({
      mode: "custom",
      custom: e.target.value.replace(/[^0-9.]/g, "")
    })
  }))), /*#__PURE__*/React.createElement("button", {
    className: "notip" + (tip.mode === "none" ? " notip--on" : ""),
    onClick: () => setTip({
      mode: "none"
    })
  }, "No tip")), /*#__PURE__*/React.createElement("div", {
    className: "card card--active"
  }, /*#__PURE__*/React.createElement("div", {
    className: "secttl"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.cart,
    w: 17
  }), " Payment"), /*#__PURE__*/React.createElement("div", {
    className: "paymethod"
  }, /*#__PURE__*/React.createElement("div", {
    className: "payopt" + (pay === "apple" ? " payopt--on" : ""),
    onClick: () => setPay("apple")
  }, /*#__PURE__*/React.createElement("div", {
    className: "payopt__radio"
  }), /*#__PURE__*/React.createElement("div", {
    className: "payopt__label"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.6 12.7c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.7-1.3-.13-2.5.77-3.1.77-.62 0-1.65-.75-2.7-.73-1.4.02-2.67.8-3.38 2.05-1.44 2.5-.37 6.2 1.04 8.23.69 1 1.5 2.1 2.57 2.06 1.03-.04 1.42-.66 2.67-.66 1.24 0 1.6.66 2.69.64 1.11-.02 1.81-1 2.49-2 .78-1.15 1.1-2.26 1.12-2.32-.02-.01-2.15-.83-2.17-3.25zM15.5 6.3c.56-.7.95-1.62.84-2.55-.81.03-1.8.54-2.39 1.23-.52.6-.98 1.58-.86 2.48.9.07 1.83-.46 2.41-1.16z"
  })), "Apple Pay"), /*#__PURE__*/React.createElement("span", {
    className: "payopt__hint"
  }, "Fastest")), /*#__PURE__*/React.createElement("div", {
    className: "payopt" + (pay === "card" ? " payopt--on" : ""),
    onClick: () => setPay("card")
  }, /*#__PURE__*/React.createElement("div", {
    className: "payopt__radio"
  }), /*#__PURE__*/React.createElement("div", {
    className: "payopt__label"
  }, "Credit or debit card"))), pay === "card" && /*#__PURE__*/React.createElement("div", {
    className: "cardform"
  }, /*#__PURE__*/React.createElement("input", {
    className: "full",
    placeholder: "Card number",
    inputMode: "numeric",
    value: card.num,
    onChange: e => setCard({
      ...card,
      num: e.target.value
    })
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "MM / YY",
    inputMode: "numeric",
    value: card.exp,
    onChange: e => setCard({
      ...card,
      exp: e.target.value
    })
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "CVC",
    inputMode: "numeric",
    value: card.cvc,
    onChange: e => setCard({
      ...card,
      cvc: e.target.value
    })
  }), /*#__PURE__*/React.createElement("input", {
    className: "full",
    placeholder: "Billing ZIP",
    inputMode: "numeric",
    value: card.zip,
    onChange: e => setCard({
      ...card,
      zip: e.target.value
    })
  }))), /*#__PURE__*/React.createElement("div", {
    className: "card" + (applied ? " card--active" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "secttl"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.bag,
    w: 17
  }), " Have a coupon code?"), /*#__PURE__*/React.createElement("div", {
    className: "coupon"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Enter coupon code",
    value: coupon,
    onChange: e => setCoupon(e.target.value.toUpperCase())
  }), /*#__PURE__*/React.createElement("button", {
    disabled: !coupon.trim(),
    onClick: () => setApplied(coupon.trim())
  }, "Apply")), applied && /*#__PURE__*/React.createElement("div", {
    className: "coupon__ok"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.check,
    w: 15,
    sw: 2
  }), " \u201C", applied, "\u201D applied \xB7 10% off")), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement("b", null, "$", subtotal.toFixed(2))), planOff > 0 && /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, freq, " plan (", Math.round(FREQ_OFF[freq] * 100), "% off)"), /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--success-600)"
    }
  }, "\u2212$", planOff.toFixed(2))), discount > 0 && /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, "Coupon"), /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--success-600)"
    }
  }, "\u2212$", discount.toFixed(2))), /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, "Tip", tip.mode === "pct" ? ` (${tip.pct}%)` : ""), /*#__PURE__*/React.createElement("b", null, "$", tipAmt.toFixed(2))), /*#__PURE__*/React.createElement("div", {
    className: "totalrow totalrow--grand"
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", {
    className: "amt"
  }, "$", total.toFixed(2)))), pay === "apple" ? /*#__PURE__*/React.createElement("button", {
    className: "applebtn",
    disabled: !ready,
    style: !ready ? {
      opacity: .45
    } : null,
    onClick: () => ready && setApOpen(true)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.6 12.7c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.7-1.3-.13-2.5.77-3.1.77-.62 0-1.65-.75-2.7-.73-1.4.02-2.67.8-3.38 2.05-1.44 2.5-.37 6.2 1.04 8.23.69 1 1.5 2.1 2.57 2.06 1.03-.04 1.42-.66 2.67-.66 1.24 0 1.6.66 2.69.64 1.11-.02 1.81-1 2.49-2 .78-1.15 1.1-2.26 1.12-2.32-.02-.01-2.15-.83-2.17-3.25zM15.5 6.3c.56-.7.95-1.62.84-2.55-.81.03-1.8.54-2.39 1.23-.52.6-.98 1.58-.86 2.48.9.07 1.83-.46 2.41-1.16z"
  })), "Pay") : /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary btn--block",
    disabled: !ready,
    onClick: place
  }, "Place order \xB7 $", total.toFixed(2)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      fontSize: 11.5,
      color: "var(--ink-500)",
      marginTop: 12,
      lineHeight: 1.5
    }
  }, "You won't be charged until your visit is complete. We'll text you to confirm timing.")), apOpen && /*#__PURE__*/React.createElement(ApplePaySheet, {
    amount: total,
    building: profile.building,
    apt: profile.apt,
    onCancel: () => setApOpen(false),
    onDone: () => {
      setApOpen(false);
      place();
    }
  }));
}

/* ============================ Info sheet (task / package description) ============================ */
function InfoSheet({
  item,
  onClose
}) {
  const isPkg = !!item.tasks;
  const tasks = isPkg ? item.tasks.map(id => TASK_BY_ID[id]).filter(Boolean) : [];
  const dur = isPkg ? tasks.reduce((s, t) => s + t.dur, 0) : item.dur;
  return /*#__PURE__*/React.createElement("div", {
    className: "scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: "sheet__close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.close,
    w: 16
  })), /*#__PURE__*/React.createElement("div", {
    className: "sheet__icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: ICONS + item.icon,
    alt: ""
  })), /*#__PURE__*/React.createElement("h3", {
    className: "sheet__title"
  }, item.name), /*#__PURE__*/React.createElement("div", {
    className: "sheet__meta"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.clock,
    w: 14
  }), " About ", fmtDur(dur), isPkg ? " / visit" : ""), /*#__PURE__*/React.createElement("span", {
    className: "sheet__dot"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, isPkg ? `$${item.price} / visit` : `From $${item.price}`)), /*#__PURE__*/React.createElement("p", {
    className: "sheet__desc"
  }, item.desc), isPkg && /*#__PURE__*/React.createElement("div", {
    className: "infolist"
  }, /*#__PURE__*/React.createElement("div", {
    className: "infolist__ttl"
  }, "What's included"), tasks.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    className: "infolist__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "infolist__dot"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.check,
    w: 12,
    sw: 2.2
  })), /*#__PURE__*/React.createElement("span", {
    className: "infolist__name"
  }, t.name), /*#__PURE__*/React.createElement("span", {
    className: "infolist__dur"
  }, "~", fmtDur(t.dur)))), item.off && /*#__PURE__*/React.createElement("div", {
    className: "infolist__save"
  }, "Save up to 15% on recurring orders")), !isPkg && item.steps && /*#__PURE__*/React.createElement("div", {
    className: "infolist"
  }, /*#__PURE__*/React.createElement("div", {
    className: "infolist__ttl"
  }, "Options"), item.steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "infolist__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "infolist__name"
  }, s.label), /*#__PURE__*/React.createElement("span", {
    className: "infolist__dur"
  }, "~", fmtDur(s.dur)), /*#__PURE__*/React.createElement("span", {
    className: "infolist__price"
  }, "$", s.price)))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--ghost btn--block",
    onClick: onClose,
    style: {
      marginTop: 4
    }
  }, "Got it")));
}

/* ============================ Home (hero grid + floating bar) ============================ */
function Home({
  cart,
  dayIdx,
  setDayIdx,
  onTaskClick,
  onStep,
  onInfo,
  onTogglePkg,
  onOpenBooking,
  name = "there"
}) {
  const [mode, setMode] = useState("tasks");
  const itemBy = Object.fromEntries(cart.map(c => [c.taskId, c]));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pad page-anim",
    style: {
      paddingBottom: 222
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hi"
  }, "Hello, ", name, " ", /*#__PURE__*/React.createElement("span", {
    className: "wave"
  }, "\uD83D\uDC4B")), /*#__PURE__*/React.createElement("h1", null, "Book your clean.")), /*#__PURE__*/React.createElement(Segmented, {
    mode: mode,
    setMode: setMode
  }), mode === "tasks" ? /*#__PURE__*/React.createElement("div", {
    className: "grid"
  }, TASKS.map(t => /*#__PURE__*/React.createElement(TaskCard, {
    key: t.id,
    task: t,
    item: itemBy[t.id],
    onToggle: onTaskClick,
    onStep: onStep,
    onInfo: onInfo
  })), /*#__PURE__*/React.createElement(GhostCard, {
    icon: /*#__PURE__*/React.createElement(LineIcon, {
      d: P.plus,
      w: 26
    }),
    title: "Create Custom Task",
    sub: "Tell us what you need",
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(GhostCard, {
    icon: /*#__PURE__*/React.createElement(LineIcon, {
      d: P.phone,
      w: 24
    }),
    title: "Request a Call",
    sub: "Get a custom quote",
    onClick: () => {}
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "blurb"
  }, "Save time, skip the guesswork. Choose a pre-built bundle that fits your routine and let Zing handle the rest."), /*#__PURE__*/React.createElement("div", {
    className: "pgrid"
  }, PACKAGES.map(p => /*#__PURE__*/React.createElement(PackageCard, {
    key: p.id,
    pkg: p,
    inCart: p.tasks.every(id => itemBy[id]),
    onToggle: onTogglePkg,
    onInfo: onInfo
  })), /*#__PURE__*/React.createElement(GhostCard, {
    icon: /*#__PURE__*/React.createElement(LineIcon, {
      d: P.plus,
      w: 26
    }),
    title: "Build Custom Package",
    sub: "Choose your own tasks",
    onClick: () => setMode("tasks")
  }), /*#__PURE__*/React.createElement(GhostCard, {
    icon: /*#__PURE__*/React.createElement(LineIcon, {
      d: P.phone,
      w: 24
    }),
    title: "Request a Call",
    sub: "Get a custom quote",
    onClick: () => {}
  }))))), /*#__PURE__*/React.createElement(FloatingBar, {
    cart: cart,
    dayIdx: dayIdx,
    setDayIdx: setDayIdx,
    onOpen: onOpenBooking
  }));
}

/* ============================ Your bookings ============================ */
function bookingRow(b, done) {
  const d = b.date;
  return /*#__PURE__*/React.createElement("div", {
    key: b.id,
    className: "upcoming" + (done ? " upcoming--done" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "upcoming__date"
  }, /*#__PURE__*/React.createElement("b", null, d.getDate()), /*#__PURE__*/React.createElement("span", null, MONTHS[d.getMonth()])), /*#__PURE__*/React.createElement("div", {
    className: "upcoming__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "upcoming__t"
  }, b.title), /*#__PURE__*/React.createElement("div", {
    className: "upcoming__s"
  }, fmtDayLabel(d), " \xB7 ", fmtTime(b.start), " \u2013 ", fmtTime(b.start + b.dur))), /*#__PURE__*/React.createElement("span", {
    className: "vtag" + (done ? " vtag--done" : "")
  }, done ? "Done" : b.freq === "One-time" ? "Booked" : b.freq));
}
function Bookings({
  bookings,
  onBrowse
}) {
  const subs = bookings.filter(b => b.freq !== "One-time");
  const completed = [{
    id: "c1",
    title: "Vacuum & Floor Magic",
    date: addBusinessDays(startToday(), -6),
    start: 600,
    dur: 40,
    freq: "One-time"
  }, {
    id: "c2",
    title: "Zing Bathroom Clean (Full) + 1 more",
    date: addBusinessDays(startToday(), -11),
    start: 540,
    dur: 75,
    freq: "Weekly"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pad page-anim"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "page-title"
  }, "Your bookings"), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card__head"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.cal,
    w: 18
  }), " Upcoming visits"), bookings.length ? bookings.map(b => bookingRow(b, false)) : /*#__PURE__*/React.createElement("div", {
    className: "visitcard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "visitcard__ico"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.cal,
    w: 24
  })), /*#__PURE__*/React.createElement("p", null, "No upcoming visits."), /*#__PURE__*/React.createElement("a", {
    onClick: onBrowse
  }, "Book a clean \u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card__head"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.refresh,
    w: 18
  }), " Subscriptions"), subs.length ? subs.map(b => /*#__PURE__*/React.createElement("div", {
    key: b.id,
    className: "upcoming"
  }, /*#__PURE__*/React.createElement("div", {
    className: "upcoming__date"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.refresh,
    w: 22
  })), /*#__PURE__*/React.createElement("div", {
    className: "upcoming__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "upcoming__t"
  }, b.title), /*#__PURE__*/React.createElement("div", {
    className: "upcoming__s"
  }, b.freq, " \xB7 next ", fmtDayLabel(b.date), " ", fmtDateLabel(b.date))), /*#__PURE__*/React.createElement("span", {
    className: "vtag"
  }, b.freq))) : /*#__PURE__*/React.createElement("div", {
    className: "visitcard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "visitcard__ico"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.refresh,
    w: 24
  })), /*#__PURE__*/React.createElement("p", null, "No recurring services yet."), /*#__PURE__*/React.createElement("a", {
    onClick: onBrowse
  }, "Set up a routine \u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card__head"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.check,
    w: 18
  }), " Completed visits"), completed.map(b => bookingRow(b, true)))));
}

/* ============================ Confirmation ============================ */
function Confirm({
  booking,
  onDone,
  profile = {
    building: "Bezel Miami",
    apt: "1925"
  }
}) {
  const subtotal = booking.items.reduce((s, c) => s + c.price, 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "confirm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "confirm__badge"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.check,
    w: 38,
    sw: 1.8
  })), /*#__PURE__*/React.createElement("h2", null, "You're all set."), /*#__PURE__*/React.createElement("p", null, "Your Zing visit is reserved for ", fmtDayLabel(booking.date), ", ", fmtDateLabel(booking.date), " from ", fmtTime(booking.start), " to ", fmtTime(booking.start + booking.dur), ". We'll take it from here.")), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card__head"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.bag,
    w: 18
  }), " Your visit"), booking.items.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.uid,
    className: "citem"
  }, /*#__PURE__*/React.createElement("div", {
    className: "citem__icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: ICONS + c.icon,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "citem__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "citem__name"
  }, c.name), /*#__PURE__*/React.createElement("div", {
    className: "citem__meta"
  }, c.opt ? `${c.opt} · ` : "", "~", fmtDur(c.dur))), /*#__PURE__*/React.createElement("div", {
    className: "citem__price"
  }, "$", c.price)))), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, "When"), /*#__PURE__*/React.createElement("b", null, fmtDayLabel(booking.date), " ", fmtDateLabel(booking.date))), /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, "Time"), /*#__PURE__*/React.createElement("b", null, fmtTime(booking.start), " \u2013 ", fmtTime(booking.start + booking.dur))), /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, "Frequency"), /*#__PURE__*/React.createElement("b", null, booking.freq)), /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, "Apartment"), /*#__PURE__*/React.createElement("b", null, profile.building, " \xB7 ", profile.apt)), /*#__PURE__*/React.createElement("div", {
    className: "totalrow totalrow--grand"
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", {
    className: "amt"
  }, "$", subtotal))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary btn--block",
    onClick: onDone
  }, "Book another clean")));
}

/* ============================ Profile ============================ */
function Profile({
  profile = {
    name: "Whit",
    building: "Bezel Miami",
    apt: "1925",
    phone: "770 656 0139",
    pets: ""
  },
  onReplay
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pad page-anim"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "page-title"
  }, "Your profile"), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card__head"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.user,
    w: 18
  }), " Personal information"), /*#__PURE__*/React.createElement("label", {
    className: "plabel"
  }, "Full name"), /*#__PURE__*/React.createElement("input", {
    className: "pinput",
    defaultValue: profile.name
  }), /*#__PURE__*/React.createElement("label", {
    className: "plabel"
  }, "Phone number"), /*#__PURE__*/React.createElement("input", {
    className: "pinput",
    defaultValue: profile.phone
  }), /*#__PURE__*/React.createElement("label", {
    className: "plabel"
  }, "Apartment"), /*#__PURE__*/React.createElement("input", {
    className: "pinput",
    defaultValue: `${profile.building} · ${profile.apt}`
  }), /*#__PURE__*/React.createElement("label", {
    className: "plabel"
  }, "Pets info"), /*#__PURE__*/React.createElement("input", {
    className: "pinput",
    defaultValue: profile.pets,
    placeholder: "e.g. friendly dog, please keep the bedroom door closed"
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary btn--block",
    style: {
      marginTop: 4
    }
  }, "Save changes")), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card__head"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.cart,
    w: 18
  }), " Payment methods"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--ink-600)",
      margin: "0 0 14px"
    }
  }, "You have no saved cards."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--ghost btn--block"
  }, "Add new card")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--ghost btn--block",
    style: {
      marginBottom: 12
    },
    onClick: onReplay
  }, "Replay welcome tour"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--danger btn--block"
  }, "Log out")));
}

/* ============================ App ============================ */
function App() {
  // Demo boot via URL: ?preset=booking → three chores in cart, opens on Pick-a-Time
  const presetCart = useMemo(() => {
    let p;
    try {
      p = new URLSearchParams(location.search).get("preset");
    } catch (e) {
      p = null;
    }
    if (p !== "booking") return null;
    return ["dusting", "trash", "dishes"].map(id => TASK_BY_ID[id]).filter(Boolean).map(t => {
      const s = t.steps ? t.steps[0] : null;
      return {
        uid: t.id,
        taskId: t.id,
        name: t.name,
        price: s ? s.price : t.price,
        dur: s ? s.dur : t.dur,
        icon: t.icon,
        stepIdx: 0,
        opt: s ? s.label : null,
        note: ""
      };
    });
  }, []);
  const [tab, setTab] = useState("home");
  const [view, setView] = useState(presetCart ? "booking" : "app"); // "app" | "booking" | "checkout"
  const [dayIdx, setDayIdx] = useState(() => {
    if (!presetCart) return 0;
    const dur = presetCart.reduce((s, c) => s + c.dur, 0);
    const i = BUSINESS_DAYS.findIndex(d => firstFit(busyFor(d), dur) != null);
    return i >= 0 ? i : 0;
  });
  const [cart, setCart] = useState(presetCart || []);
  const [freq, setFreq] = useState("One-time");
  const [pending, setPending] = useState(null);
  const [confirmed, setConfirmed] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [infoItem, setInfoItem] = useState(null);
  const [onboarded, setOnboarded] = useState(() => {
    if (presetCart) return true;
    try {
      if (new URLSearchParams(location.search).has("onboarding")) return false;
    } catch (e) {}
    try {
      return localStorage.getItem("zing.onboarded") === "1";
    } catch (e) {
      return false;
    }
  });
  const [profile, setProfile] = useState({
    name: "Whit",
    building: "Bezel Miami",
    apt: "1925",
    phone: "770 656 0139",
    pets: ""
  });
  const finishOnboarding = d => {
    const first = (d.name || "").trim().split(/\s+/)[0] || "there";
    const BLD = {
      bezel: "Bezel Miami",
      muze: "Muze at Met",
      worldtower: "Miami World Tower",
      wynd27: "Wynd 27",
      wynd28: "Wynd 28",
      paraiso: "Paraíso Bayviews",
      forma: "Forma",
      hamilton: "The Hamilton"
    };
    setProfile({
      name: first,
      building: BLD[d.building] || "Bezel Miami",
      apt: (d.apt || "").trim() || "—",
      hometype: d.hometype || "",
      baths: d.baths || "",
      phone: d.phone || "",
      pets: (d.pets || "").trim()
    });
    try {
      localStorage.setItem("zing.onboarded", "1");
    } catch (e) {}
    setTab("home");
    setView("app");
    setOnboarded(true);
  };
  const replayTour = () => {
    setConfirmed(null);
    setView("app");
    setTab("home");
    setOnboarded(false);
  };
  const cartIds = new Set(cart.map(c => c.taskId));
  const mkItem = (t, stepIdx = 0) => {
    const s = t.steps ? t.steps[stepIdx] : null;
    return {
      uid: t.id,
      taskId: t.id,
      name: t.name,
      price: s ? s.price : t.price,
      dur: s ? s.dur : t.dur,
      icon: t.icon,
      stepIdx,
      opt: s ? s.label : null,
      note: ""
    };
  };
  const onTaskClick = task => {
    if (cartIds.has(task.id)) {
      setCart(c => c.filter(x => x.taskId !== task.id));
      return;
    }
    setCart(c => [...c, mkItem(task)]);
  };
  const stepItem = (task, delta) => setCart(c => c.map(x => {
    if (x.taskId !== task.id) return x;
    const i = Math.max(0, Math.min(task.steps.length - 1, x.stepIdx + delta));
    const s = task.steps[i];
    return {
      ...x,
      stepIdx: i,
      dur: s.dur,
      price: s.price,
      opt: s.label
    };
  }));
  const togglePkg = pkg => {
    const allIn = pkg.tasks.every(id => cartIds.has(id));
    if (allIn) setCart(c => c.filter(x => !pkg.tasks.includes(x.taskId)));else setCart(c => [...c, ...pkg.tasks.filter(id => !cartIds.has(id)).map(id => mkItem(TASK_BY_ID[id]))]);
  };
  const reserve = b => {
    setPending(b);
    setView("checkout");
  };
  const placeOrder = extra => {
    const booking = {
      id: "b" + Date.now(),
      ...pending,
      items: cart,
      freq,
      title: titleOf(cart),
      ...extra
    };
    setBookings(list => [booking, ...list]);
    setConfirmed(booking);
    setPending(null);
    setView("app");
  };
  const done = () => {
    setCart([]);
    setFreq("One-time");
    setConfirmed(null);
    setPending(null);
    setView("app");
    setTab("bookings");
  };
  const goTab = t => {
    setConfirmed(null);
    setView("app");
    setTab(t);
  };
  const chromeless = (view === "booking" || view === "checkout") && !confirmed;
  let body;
  if (confirmed) body = /*#__PURE__*/React.createElement(Confirm, {
    booking: confirmed,
    onDone: done,
    profile: profile
  });else if (view === "checkout") body = /*#__PURE__*/React.createElement(Checkout, {
    cart: cart,
    booking: pending,
    freq: freq,
    setFreq: setFreq,
    onBack: () => setView("booking"),
    onPlaceOrder: placeOrder,
    profile: profile
  });else if (view === "booking") body = /*#__PURE__*/React.createElement(BookingPage, {
    cart: cart,
    dayIdx: dayIdx,
    setDayIdx: setDayIdx,
    onBack: () => setView("app"),
    onReserve: reserve
  });else if (tab === "bookings") body = /*#__PURE__*/React.createElement(Bookings, {
    bookings: bookings,
    onBrowse: () => goTab("home")
  });else if (tab === "profile") body = /*#__PURE__*/React.createElement(Profile, {
    profile: profile,
    onReplay: replayTour
  });else body = /*#__PURE__*/React.createElement(Home, {
    cart: cart,
    dayIdx: dayIdx,
    setDayIdx: setDayIdx,
    onTaskClick: onTaskClick,
    onStep: stepItem,
    onInfo: setInfoItem,
    onTogglePkg: togglePkg,
    onOpenBooking: () => setView("booking"),
    name: profile.name
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "phone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "phone-screen"
  }, onboarded ? /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, !chromeless && /*#__PURE__*/React.createElement(AppBar, null), body, !chromeless && /*#__PURE__*/React.createElement(BottomNav, {
    tab: confirmed ? "bookings" : tab,
    setTab: goTab
  })) : /*#__PURE__*/React.createElement(Onboarding, {
    onDone: finishOnboarding
  }), infoItem && /*#__PURE__*/React.createElement(InfoSheet, {
    item: infoItem,
    onClose: () => setInfoItem(null)
  })), /*#__PURE__*/React.createElement("div", {
    className: "phone-notch"
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/zing-resident-app/app.jsx", error: String((e && e.message) || e) }); }

// export/zing-resident-app/components.jsx
try { (() => {
/* Zing Resident App · shared components (chrome, cards, timeline) */
const {
  useState,
  useRef
} = React;
const {
  ICONS,
  TASKS,
  TASK_BY_ID,
  PACKAGES,
  DAY_START,
  DAY_END,
  HOUR_PX,
  px,
  totalHeight,
  fmtDayLabel,
  fmtDateLabel,
  fmtTime,
  fmtTimeShort,
  fmtDur,
  openWindows,
  busyFor,
  firstFit,
  startToday,
  P,
  LineIcon
} = window;

/* ---------------- App bar (co-brand + Text us) ---------------- */
function AppBar() {
  return /*#__PURE__*/React.createElement("header", {
    className: "appbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cobrand"
  }, /*#__PURE__*/React.createElement("img", {
    className: "zing",
    src: "icons/zing-logo.svg",
    alt: "Zing"
  }), /*#__PURE__*/React.createElement("div", {
    className: "divider"
  }), /*#__PURE__*/React.createElement("img", {
    className: "bezel",
    src: "icons/bezel.webp",
    alt: "Bezel Miami"
  })), /*#__PURE__*/React.createElement("button", {
    className: "textus"
  }, "Text us"));
}

/* ---------------- Bottom navigation ---------------- */
function BottomNav({
  tab,
  setTab
}) {
  const items = [{
    id: "home",
    label: "Home",
    d: P.home
  }, {
    id: "bookings",
    label: "Your bookings",
    d: P.cal
  }, {
    id: "profile",
    label: "Profile",
    d: P.user
  }];
  return /*#__PURE__*/React.createElement("nav", {
    className: "bnav"
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    className: tab === it.id ? "on" : "",
    onClick: () => setTab(it.id)
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: it.d,
    w: 23
  }), /*#__PURE__*/React.createElement("span", null, it.label))));
}

/* ---------------- Compact swipeable date strip (arrows + chips) ---------------- */
function DateStrip({
  days,
  idx,
  setIdx
}) {
  const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const trackRef = useRef(null);
  React.useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const chip = el.children[idx];
    if (chip) el.scrollTo({
      left: chip.offsetLeft - el.clientWidth / 2 + chip.clientWidth / 2,
      behavior: "smooth"
    });
  }, [idx]);
  return /*#__PURE__*/React.createElement("div", {
    className: "datestrip"
  }, /*#__PURE__*/React.createElement("button", {
    className: "datestrip__arrow",
    onClick: () => setIdx(Math.max(0, idx - 1)),
    disabled: idx === 0,
    "aria-label": "Previous day"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.left,
    w: 18
  })), /*#__PURE__*/React.createElement("div", {
    className: "datestrip__track",
    ref: trackRef
  }, days.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "dchip" + (i === idx ? " dchip--on" : ""),
    onClick: () => setIdx(i)
  }, /*#__PURE__*/React.createElement("span", null, DOW[d.getDay()]), /*#__PURE__*/React.createElement("b", null, d.getDate())))), /*#__PURE__*/React.createElement("button", {
    className: "datestrip__arrow",
    onClick: () => setIdx(Math.min(days.length - 1, idx + 1)),
    disabled: idx === days.length - 1,
    "aria-label": "Next day"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.right,
    w: 18
  })));
}

/* ---------------- Tasks / Packages segmented ---------------- */
function Segmented({
  mode,
  setMode
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "seg",
    role: "tablist"
  }, /*#__PURE__*/React.createElement("button", {
    role: "tab",
    "aria-selected": mode === "tasks",
    onClick: () => setMode("tasks")
  }, /*#__PURE__*/React.createElement("span", {
    className: "gi"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.spark,
    w: 20
  })), " Tasks"), /*#__PURE__*/React.createElement("button", {
    role: "tab",
    "aria-selected": mode === "packages",
    onClick: () => setMode("packages")
  }, /*#__PURE__*/React.createElement("span", {
    className: "gi"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.bag,
    w: 19
  })), " Packages"));
}

/* ---------------- Task card (with on-card stepper for count-based tasks) ---------------- */
function TaskCard({
  task,
  item,
  onToggle,
  onStep,
  onInfo
}) {
  const inCart = !!item;
  const stepped = inCart && task.steps;
  const price = stepped ? task.steps[item.stepIdx].price : task.price;
  const dur = stepped ? task.steps[item.stepIdx].dur : task.dur;
  return /*#__PURE__*/React.createElement("div", {
    className: "tcard" + (inCart ? " in-cart" : ""),
    onClick: () => {
      if (inCart && task.steps) return;
      onToggle(task);
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "tcard__info",
    onClick: e => {
      e.stopPropagation();
      onInfo(task);
    },
    "aria-label": "What's included"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.info,
    w: 16
  })), inCart && /*#__PURE__*/React.createElement("span", {
    className: "tcard__check",
    onClick: e => {
      e.stopPropagation();
      onToggle(task);
    }
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: inCart && task.steps ? P.close : P.check,
    w: 14,
    sw: 2
  })), /*#__PURE__*/React.createElement("div", {
    className: "tcard__icon" + (/\.png$/.test(task.icon) ? " tcard__icon--photo" : "")
  }, /*#__PURE__*/React.createElement("img", {
    src: ICONS + task.icon,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "tcard__name"
  }, task.name), stepped ? /*#__PURE__*/React.createElement("div", {
    className: "qstep",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onStep(task, -1),
    disabled: item.stepIdx === 0,
    "aria-label": "Fewer"
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    className: "qstep__lbl"
  }, task.steps[item.stepIdx].label), /*#__PURE__*/React.createElement("button", {
    onClick: () => onStep(task, 1),
    disabled: item.stepIdx === task.steps.length - 1,
    "aria-label": "More"
  }, "+")) : null, /*#__PURE__*/React.createElement("div", {
    className: "tcard__dur"
  }, "~", fmtDur(dur)), /*#__PURE__*/React.createElement("div", {
    className: "tcard__price"
  }, "$", price));
}
function GhostCard({
  icon,
  title,
  sub,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tcard tcard--ghost",
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "tcard__plus"
  }, icon), /*#__PURE__*/React.createElement("div", {
    className: "tcard__name"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "tcard__sub"
  }, sub));
}

/* ---------------- Package card ---------------- */
function PackageCard({
  pkg,
  inCart,
  onToggle,
  onInfo
}) {
  const dur = pkg.tasks.reduce((s, id) => s + (TASK_BY_ID[id] ? TASK_BY_ID[id].dur : 0), 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "pcard" + (inCart ? " in-cart" : ""),
    onClick: () => onToggle(pkg)
  }, /*#__PURE__*/React.createElement("button", {
    className: "tcard__info",
    onClick: e => {
      e.stopPropagation();
      onInfo(pkg);
    },
    "aria-label": "What's included"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.info,
    w: 16
  })), inCart && /*#__PURE__*/React.createElement("span", {
    className: "tcard__check",
    onClick: e => {
      e.stopPropagation();
      onToggle(pkg);
    }
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.check,
    w: 14,
    sw: 2
  })), /*#__PURE__*/React.createElement("div", {
    className: "pcard__icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: ICONS + pkg.icon,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "pcard__name"
  }, pkg.name), /*#__PURE__*/React.createElement("div", {
    className: "pcard__dur"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.clock,
    w: 12
  }), " ~", fmtDur(dur)), /*#__PURE__*/React.createElement("div", {
    className: "pcard__starting"
  }, "Starting at"), /*#__PURE__*/React.createElement("div", {
    className: "pcard__price"
  }, "$", pkg.price, " ", /*#__PURE__*/React.createElement("small", null, "/ visit")), pkg.off && /*#__PURE__*/React.createElement("div", {
    className: "pcard__off"
  }, "Up to 15% off for Weekly,", /*#__PURE__*/React.createElement("br", null), "Bi-Weekly, Monthly orders"));
}

/* ---------------- Date navigator ---------------- */
function DateNav({
  date,
  onPrev,
  onNext,
  canPrev,
  canNext
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "datenav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "datenav__btn",
    onClick: onPrev,
    disabled: !canPrev,
    "aria-label": "Previous day"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.left,
    w: 20
  })), /*#__PURE__*/React.createElement("div", {
    className: "datenav__label"
  }, /*#__PURE__*/React.createElement("div", {
    className: "datenav__day"
  }, fmtDayLabel(date)), /*#__PURE__*/React.createElement("div", {
    className: "datenav__date"
  }, fmtDateLabel(date))), /*#__PURE__*/React.createElement("button", {
    className: "datenav__btn",
    onClick: onNext,
    disabled: !canNext,
    "aria-label": "Next day"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.right,
    w: 20
  })));
}

/* ---------------- Week strip (5 business days) ---------------- */
function WeekStrip({
  days,
  activeKey,
  onPick,
  freeness
}) {
  const DOW = ["S", "M", "T", "W", "T", "F", "S"];
  return /*#__PURE__*/React.createElement("div", {
    className: "weekstrip"
  }, days.map(d => {
    const k = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      className: "wchip" + (k === activeKey ? " wchip--on" : ""),
      onClick: () => onPick(d)
    }, /*#__PURE__*/React.createElement("span", null, DOW[d.getDay()]), /*#__PURE__*/React.createElement("b", null, d.getDate()), /*#__PURE__*/React.createElement("i", {
      className: "wchip__free"
    }));
  }));
}

/* ---------------- Day chips (rounded, availability dot left of label) ---------------- */
function DayChips({
  days,
  idx,
  onPick,
  dur,
  variant
}) {
  const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const todayKey = startToday().toDateString();
  return /*#__PURE__*/React.createElement("div", {
    className: "fdays" + (variant === "page" ? " fdays--page" : "")
  }, days.map((d, i) => {
    let cls = "fchip";
    if (dur > 0) cls += firstFit(busyFor(d), dur) != null ? " fchip--free" : " fchip--full";
    if (i === idx) cls += " fchip--on";
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: cls,
      onClick: e => {
        e.stopPropagation();
        onPick(i);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "fchip__top"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fchip__dot"
    }), /*#__PURE__*/React.createElement("span", {
      className: "fchip__dow"
    }, d.toDateString() === todayKey ? "Today" : DOW[d.getDay()])), /*#__PURE__*/React.createElement("b", {
      className: "fchip__num"
    }, d.getDate()));
  }));
}

/* ---------------- Timeline legend ---------------- */
function TimelineLegend({
  booking
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tlhint"
  }, /*#__PURE__*/React.createElement("i", null, /*#__PURE__*/React.createElement("span", {
    className: "sw sw--free"
  }), " Open"), /*#__PURE__*/React.createElement("i", null, /*#__PURE__*/React.createElement("span", {
    className: "sw sw--busy"
  }), " Booked"), booking && /*#__PURE__*/React.createElement("i", null, /*#__PURE__*/React.createElement("span", {
    className: "sw sw--sel"
  }), " Your visit"));
}

/* ---------------- The day timeline ---------------- */
function Timeline({
  busy,
  dur,
  selStart,
  onPick,
  onDragStart,
  showOpen
}) {
  const trackRef = useRef(null);
  const dragRef = useRef(null);
  const hours = [];
  for (let h = DAY_START / 60; h <= DAY_END / 60; h++) hours.push(h);
  const handleTap = e => {
    if (!onPick) return;
    const rect = trackRef.current.getBoundingClientRect();
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    const minutes = DAY_START + y / HOUR_PX * 60;
    onPick(minutes);
  };
  const selDown = e => {
    if (!onDragStart) return;
    e.stopPropagation();
    const rect = trackRef.current.getBoundingClientRect();
    const py = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    dragRef.current = {
      grab: py - px(selStart)
    };
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (_) {}
  };
  const selMove = e => {
    if (!dragRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const py = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    const startMin = DAY_START + (py - dragRef.current.grab) / HOUR_PX * 60;
    onDragStart(startMin);
  };
  const selUp = () => {
    dragRef.current = null;
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "timeline"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tl-gutter",
    style: {
      height: totalHeight
    }
  }, hours.map(h => /*#__PURE__*/React.createElement("div", {
    key: h,
    className: "hr",
    style: {
      top: px(h * 60)
    }
  }, fmtTimeShort(h * 60)))), /*#__PURE__*/React.createElement("div", {
    className: "tl-track",
    ref: trackRef,
    style: {
      height: totalHeight
    },
    onClick: handleTap
  }, hours.map(h => /*#__PURE__*/React.createElement("div", {
    key: "g" + h,
    className: "tl-grid",
    style: {
      top: px(h * 60)
    }
  })), hours.slice(0, -1).map(h => /*#__PURE__*/React.createElement("div", {
    key: "gh" + h,
    className: "tl-grid tl-grid--half",
    style: {
      top: px(h * 60 + 30)
    }
  })), showOpen && openWindows(busy).filter(w => w.end - w.start >= 30).map((w, i) => {
    const h = px(w.end) - px(w.start);
    const covered = selStart != null && dur != null && selStart < w.end && selStart + dur > w.start;
    return /*#__PURE__*/React.createElement("div", {
      key: "o" + i,
      className: "tl-open",
      style: {
        top: px(w.start),
        height: h - 3
      }
    }, h >= 26 && !covered && /*#__PURE__*/React.createElement("span", {
      className: "tl-open__lbl"
    }, "Open \xB7 ", fmtDur(w.end - w.start)));
  }), busy.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: "b" + i,
    className: "tl-busy",
    style: {
      top: px(b.start),
      height: px(b.end) - px(b.start) - 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-busy__lbl"
  }, b.label), px(b.end) - px(b.start) > 34 && /*#__PURE__*/React.createElement("span", {
    className: "tl-busy__sub"
  }, fmtTimeShort(b.start), "\u2013", fmtTimeShort(b.end), " \xB7 ", b.unit))), selStart != null && dur != null && /*#__PURE__*/React.createElement("div", {
    className: "tl-sel" + (onDragStart ? " tl-sel--drag" : ""),
    style: {
      top: px(selStart),
      height: px(selStart + dur) - px(selStart) - 3
    },
    onPointerDown: selDown,
    onPointerMove: selMove,
    onPointerUp: selUp,
    onPointerCancel: selUp
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-sel__grip tl-sel__grip--top"
  }), /*#__PURE__*/React.createElement("div", {
    className: "tl-sel__time"
  }, fmtTime(selStart), " \u2013 ", fmtTime(selStart + dur)), /*#__PURE__*/React.createElement("div", {
    className: "tl-sel__dur"
  }, onDragStart ? "Click or drag \u00b7 " : "", fmtDur(dur)), /*#__PURE__*/React.createElement("span", {
    className: "tl-sel__grip tl-sel__grip--bot"
  }))));
}
Object.assign(window, {
  AppBar,
  BottomNav,
  DateStrip,
  DayChips,
  Segmented,
  TaskCard,
  GhostCard,
  PackageCard,
  DateNav,
  WeekStrip,
  TimelineLegend,
  Timeline
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/zing-resident-app/components.jsx", error: String((e && e.message) || e) }); }

// export/zing-resident-app/data.jsx
try { (() => {
/* Zing Resident App · data + helpers + line icons
   Exposed on window for the other Babel scripts. */

const ICONS = "icons/";

/* ---- Service catalogue (matches the live Tasks menu) ---- */
const TASKS = [{
  id: "bathroom",
  name: "Zing Bathroom Clean (Full)",
  price: 35,
  dur: 45,
  icon: "bathroom.webp",
  desc: "Making bathrooms sparkle like a 5-star hotel. Toilet + sink scrub, shower & tub scrub, floors swept and mopped, mirrors wiped, surfaces disinfected and trash emptied.",
  opt: {
    label: "How many bathrooms?",
    noun: "bathrooms"
  },
  steps: [{
    label: "1 bathroom",
    dur: 45,
    price: 35
  }, {
    label: "2 bathrooms",
    dur: 75,
    price: 60
  }, {
    label: "3 bathrooms",
    dur: 105,
    price: 85
  }]
}, {
  id: "floor",
  name: "Vacuum & Floor Magic",
  price: 40,
  dur: 40,
  icon: "floor_magic.webp",
  desc: "A full-apartment vacuum and mop. Floors left spotless, streak-free and quietly fresh.",
  opt: {
    label: "Apartment size",
    noun: "home"
  },
  steps: [{
    label: "1 bedroom",
    dur: 40,
    price: 40
  }, {
    label: "2 bedroom",
    dur: 55,
    price: 55
  }, {
    label: "3 bedroom",
    dur: 70,
    price: 70
  }]
}, {
  id: "dusting",
  name: "Surface Dusting",
  price: 30,
  dur: 30,
  icon: "countertop.webp",
  desc: "Shelves, sills, tables and electronics gently dusted and wiped down throughout your space."
}, {
  id: "trash",
  name: "Trash & Recycling Run",
  price: 1,
  dur: 10,
  icon: "trash.webp",
  desc: "We gather, sort and take out the trash and recycling, and reline every bin."
}, {
  id: "balcony",
  name: "Balcony Refresh",
  price: 32,
  dur: 35,
  icon: "balcony.webp",
  desc: "Sweep, wipe and tidy your balcony — railings, floor and furniture left guest-ready."
}, {
  id: "windows",
  name: "Complete Window Cleaning",
  price: 12,
  dur: 30,
  icon: "window.webp",
  desc: "Interior glass and sills cleaned to a clear, streak-free shine.",
  opt: {
    label: "How many windows?",
    noun: "windows"
  },
  steps: [{
    label: "Up to 3 windows",
    dur: 30,
    price: 12
  }, {
    label: "4\u20136 windows",
    dur: 45,
    price: 20
  }, {
    label: "7\u201310 windows",
    dur: 60,
    price: 30
  }]
}, {
  id: "plants",
  name: "Watering Plants",
  price: 3,
  dur: 10,
  icon: "plants.webp",
  desc: "We water and check on your plants so everything stays lush while life is busy."
}, {
  id: "couch",
  name: "Couch & Throw Pillow Refresh",
  price: 3,
  dur: 15,
  icon: "couch.webp",
  desc: "Cushions fluffed, throws folded and the sofa reset to a calm, hotel-lobby tidy."
}, {
  id: "bed",
  name: "Bed Linen Refresh",
  price: 8,
  dur: 20,
  icon: "bed.webp",
  desc: "Fresh, crisp linens and a tightly-made bed — turned down like a suite."
}, {
  id: "dishes",
  name: "Dish Washing",
  price: 13,
  dur: 25,
  icon: "dishes.webp",
  desc: "Dishes washed, dried and put away, sink wiped down and left gleaming."
}, {
  id: "fridge",
  name: "Fridge Cleanout",
  price: 35,
  dur: 40,
  icon: "fridge.webp",
  desc: "Interior wiped, shelves cleaned and expired items cleared — fresh and organised."
}, {
  id: "oven",
  name: "Zing Oven Clean",
  price: 35,
  dur: 45,
  icon: "oven.webp",
  desc: "A deep degrease of the oven interior, racks and glass door, back to like-new."
}, {
  id: "spill",
  name: "Wine & Coffee Spill Treatment",
  price: 9,
  dur: 20,
  icon: "spill.webp",
  desc: "Fast, gentle treatment of fresh wine, coffee and food stains on fabric and floors."
}, {
  id: "laundry",
  name: "Zing Laundry Service",
  price: 15,
  dur: 50,
  icon: "laundry.webp",
  desc: "Wash and dry a load of laundry with premium detergent and fabric care.",
  opt: {
    label: "How many loads?",
    noun: "loads"
  },
  steps: [{
    label: "1 load",
    dur: 50,
    price: 15
  }, {
    label: "2 loads",
    dur: 85,
    price: 28
  }, {
    label: "3 loads",
    dur: 120,
    price: 40
  }]
}, {
  id: "folding",
  name: "Clothes Folding",
  price: 16,
  dur: 25,
  icon: "folding.webp",
  desc: "Clean laundry neatly folded and stacked, hotel-housekeeping style."
}, {
  id: "groceries",
  name: "Put Away Groceries",
  price: 3,
  dur: 15,
  icon: "groceries.webp",
  desc: "We unpack and organise your delivery into pantry and fridge so it's ready to use."
}, {
  id: "deodorize",
  name: "Deodorizing",
  price: 5,
  dur: 10,
  icon: "deodorize.webp",
  desc: "A light, natural deodorizing pass leaves your space smelling clean and calm."
}];
const TASK_BY_ID = Object.fromEntries(TASKS.map(t => [t.id, t]));

/* ---- Packages ---- */
const PACKAGES = [{
  id: "full",
  name: "Full Apartment Clean",
  price: 116,
  off: true,
  tasks: ["bathroom", "floor", "dusting", "trash", "bed"],
  icon: "couch.webp",
  desc: "Our signature top-to-bottom reset. We clean the bathroom, vacuum and mop every floor, dust all surfaces, take out the trash and refresh the bed linens — your whole apartment handled in one visit."
}, {
  id: "kitchen",
  name: "Kitchen Commander",
  price: 89,
  off: true,
  tasks: ["dishes", "oven", "fridge", "dusting"],
  icon: "oven.webp",
  desc: "A complete kitchen reset in one visit. We wash, dry and put away the dishes, deep-degrease the oven inside and out, wipe down and declutter the fridge, and dust and sanitize every counter and surface — the whole kitchen left spotless."
}, {
  id: "weekly",
  name: "Smart Weekly Care",
  price: 67,
  off: false,
  tasks: ["dusting", "floor", "trash"],
  icon: "bathroom.webp",
  desc: "A light, regular upkeep visit to keep things effortlessly tidy — surfaces dusted, floors vacuumed and mopped, and trash taken out. Best on a weekly rhythm."
}, {
  id: "biweekly",
  name: "Smart Bi-Weekly Care",
  price: 69,
  off: false,
  tasks: ["bathroom", "floor", "dusting"],
  icon: "window.webp",
  desc: "A slightly deeper every-other-week refresh — a full bathroom clean plus floors vacuumed and mopped and all surfaces dusted. The easy middle-ground routine."
}];

/* ---- Operating hours ---- */
const DAY_START = 8 * 60; // 8:00 AM
const DAY_END = 18 * 60; // 6:00 PM
const HOUR_PX = 64; // vertical px per hour
const SNAP = 15; // minute snap
const px = min => (min - DAY_START) / 60 * HOUR_PX;
const totalHeight = (DAY_END - DAY_START) / 60 * HOUR_PX;

/* ---- Date helpers (Mon–Fri only) ---- */
const DAYNAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function startToday() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  while (d.getDay() === 0 || d.getDay() === 6) d.setDate(d.getDate() + 1);
  return d;
}
function addBusinessDays(date, n) {
  const d = new Date(date);
  let step = n >= 0 ? 1 : -1;
  let left = Math.abs(n);
  while (left > 0) {
    d.setDate(d.getDate() + step);
    if (d.getDay() !== 0 && d.getDay() !== 6) left--;
  }
  return d;
}
const dateKey = d => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
const fmtDayLabel = d => `${DAYNAMES[d.getDay()]}`;
const fmtDateLabel = d => `${MONTHS[d.getMonth()]} ${d.getDate()}`;

/* ---- Time formatting ---- */
function fmtTime(min) {
  let h = Math.floor(min / 60),
    m = min % 60;
  const ap = h >= 12 ? "PM" : "AM";
  let hh = h % 12;
  if (hh === 0) hh = 12;
  return m === 0 ? `${hh}:00 ${ap}` : `${hh}:${String(m).padStart(2, "0")} ${ap}`;
}
function fmtTimeShort(min) {
  let h = Math.floor(min / 60),
    m = min % 60;
  const ap = h >= 12 ? "p" : "a";
  let hh = h % 12;
  if (hh === 0) hh = 12;
  return m === 0 ? `${hh}${ap}` : `${hh}:${String(m).padStart(2, "0")}${ap}`;
}
function fmtDur(min) {
  const h = Math.floor(min / 60),
    m = min % 60;
  if (h === 0) return `${m} min`;
  if (m === 0) return `${h} hr`;
  return `${h} hr ${m} min`;
}

/* ---- Deterministic "already booked" blocks per day ----
   Booking load rotates so the 5-day strip always shows variety:
   ~1 in 5 days is FULL (red the moment you add anything),
   ~1 in 5 is HEAVY (only short tasks fit), the rest are OPEN. */
function seeded(n) {
  let x = Math.sin(n) * 10000;
  return x - Math.floor(x);
}
const BUSY_LABELS = ["Full apartment clean", "Bathroom deep clean", "Kitchen reset", "Vacuum & floors", "Window cleaning", "Laundry service", "Fridge cleanout", "Dusting & tidy"];
const FLOOR_ORD = ["3rd", "5th", "7th", "9th", "11th", "12th", "14th", "17th", "19th", "21st", "24th", "28th"];
function dayLoad(d) {
  const ord = Math.floor(d.getTime() / 86400000);
  const m = (ord % 5 + 5) % 5;
  if (m === 0) return "full";
  if (m === 2) return "heavy";
  return "open";
}
function busyFor(d) {
  const seed = d.getFullYear() * 1000 + d.getMonth() * 40 + d.getDate();
  const load = dayLoad(d);
  const blocks = [];
  const lbl = i => BUSY_LABELS[Math.floor(seeded(seed * 13 + i) * BUSY_LABELS.length)];
  const unit = i => FLOOR_ORD[Math.floor(seeded(seed * 17 + i) * FLOOR_ORD.length)] + " floor";
  if (load === "full") {
    // fully booked — packed wall-to-wall, no usable gap (red for anything)
    let cursor = DAY_START;
    let i = 0;
    while (cursor < DAY_END) {
      const len = (3 + Math.floor(seeded(seed * 7 + i * 5) * 4)) * SNAP; // 45–90 min
      let end = cursor + len;
      if (end > DAY_END - 30) end = DAY_END; // clamp: no leftover window
      blocks.push({
        start: cursor,
        end,
        label: lbl(i),
        unit: unit(i)
      });
      if (end >= DAY_END) break;
      cursor = end + (seeded(seed * 3 + i) < .5 ? 0 : SNAP); // 0–15 min seam
      i++;
    }
  } else if (load === "heavy") {
    // packed, leaving only 30–45 min windows — short tasks fit, bundles don't
    let cursor = DAY_START + (seeded(seed * 2) < .5 ? 0 : SNAP);
    let i = 0;
    while (cursor < DAY_END - 30) {
      const len = (4 + Math.floor(seeded(seed * 7 + i * 5) * 3)) * SNAP; // 60–90 min
      const end = Math.min(cursor + len, DAY_END);
      blocks.push({
        start: cursor,
        end,
        label: lbl(i),
        unit: unit(i)
      });
      const gap = (2 + Math.floor(seeded(seed * 11 + i * 3) * 2)) * SNAP; // 30–45 min
      cursor = end + gap;
      i++;
    }
  } else {
    // open day — a handful of scattered bookings, lots of room
    const count = 2 + Math.floor(seeded(seed) * 3); // 2–4 blocks
    let cursor = DAY_START + Math.floor(seeded(seed * 2) * 6) * SNAP;
    for (let i = 0; i < count; i++) {
      const gap = (1 + Math.floor(seeded(seed * 7 + i * 3) * 5)) * SNAP; // 15–75 min gap
      const len = (2 + Math.floor(seeded(seed * 11 + i * 5) * 5)) * SNAP; // 30–90 min
      const start = cursor + gap;
      const end = start + len;
      if (end > DAY_END - 15) break;
      blocks.push({
        start,
        end,
        label: lbl(i),
        unit: unit(i)
      });
      cursor = end;
    }
  }
  return blocks;
}

/* ---- Open windows = gaps between busy blocks within hours ---- */
function openWindows(busy) {
  const sorted = [...busy].sort((a, b) => a.start - b.start);
  const wins = [];
  let cursor = DAY_START;
  for (const b of sorted) {
    if (b.start - cursor >= SNAP) wins.push({
      start: cursor,
      end: b.start
    });
    cursor = Math.max(cursor, b.end);
  }
  if (DAY_END - cursor >= SNAP) wins.push({
    start: cursor,
    end: DAY_END
  });
  return wins;
}

/* ---- Find first valid start for a duration on a day ---- */
function firstFit(busy, dur) {
  for (const w of openWindows(busy)) {
    if (w.end - w.start >= dur) return w.start;
  }
  return null;
}
/* ---- Is a [start, start+dur) block valid (in hours, no overlap)? ---- */
function fits(busy, start, dur) {
  if (start < DAY_START || start + dur > DAY_END) return false;
  return !busy.some(b => start < b.end && start + dur > b.start);
}
/* ---- Snap an arbitrary minute to a valid start near it ---- */
function snapValid(busy, raw, dur) {
  let start = Math.round((raw - dur / 2) / SNAP) * SNAP;
  start = Math.max(DAY_START, Math.min(start, DAY_END - dur));
  if (fits(busy, start, dur)) return start;
  // search outward for nearest fitting start
  for (let step = SNAP; step <= DAY_END - DAY_START; step += SNAP) {
    if (fits(busy, start - step, dur)) return start - step;
    if (fits(busy, start + step, dur)) return start + step;
  }
  return firstFit(busy, dur);
}
/* ---- Snap a START minute (anchored at top, for tap + drag) to nearest valid ---- */
function snapStart(busy, rawStart, dur) {
  let start = Math.round(rawStart / SNAP) * SNAP;
  start = Math.max(DAY_START, Math.min(start, DAY_END - dur));
  if (fits(busy, start, dur)) return start;
  for (let step = SNAP; step <= DAY_END - DAY_START; step += SNAP) {
    if (fits(busy, start - step, dur)) return start - step;
    if (fits(busy, start + step, dur)) return start + step;
  }
  return firstFit(busy, dur);
}

/* ---------------- Line icons (UI chrome) ---------------- */
const P = {
  home: "M3 11l9-8 9 8M5 9.5V20h14V9.5",
  cal: "M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zM4 9.5h16M8 3.5v3M16 3.5v3",
  user: "M4.5 20a7.5 7.5 0 0 1 15 0M12 11.5a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5",
  cart: "M3 4h2.2l1.9 11.2a1.5 1.5 0 0 0 1.48 1.25h8.32a1.5 1.5 0 0 0 1.47-1.2L20.5 7H6.2M9.5 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2M17 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2",
  left: "M15 5l-7 7 7 7",
  right: "M9 5l7 7-7 7",
  close: "M6 6l12 12M18 6L6 18",
  check: "M5 12.5l4.5 4.5L19 7",
  clock: "M12 7.5v5l3 2M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18",
  plus: "M12 5v14M5 12h14",
  phone: "M6.5 3.5h3l1.2 4-2 1.4a12 12 0 0 0 4.9 4.9l1.4-2 4 1.2v3a1.6 1.6 0 0 1-1.7 1.6A15.5 15.5 0 0 1 4.9 5.2 1.6 1.6 0 0 1 6.5 3.5",
  trash: "M5 7h14M9 7V5h6v2M7 7l.8 12.2A1 1 0 0 0 8.8 20h6.4a1 1 0 0 0 1-0.8L17 7M10 11v5M14 11v5",
  refresh: "M4 11a8 8 0 0 1 13.5-4.5L20 9M20 4v5h-5M20 13a8 8 0 0 1-13.5 4.5L4 15M4 20v-5h5",
  spark: "M12 3l1.6 5L19 9.6 13.6 11 12 16l-1.6-5L5 9.6 10.4 8z",
  edit: "M4 20h4l10-10-4-4L4 16zM14 6l4 4",
  bag: "M6 8h12l-1 12H7zM9 8V6a3 3 0 0 1 6 0v2",
  info: "M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18M12 11v5M12 7.5h.01"
};
function LineIcon({
  d,
  w = 22,
  sw = 1.6,
  style
}) {
  return React.createElement("svg", {
    width: w,
    height: w,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style
  }, React.createElement("path", {
    d
  }));
}
Object.assign(window, {
  ICONS,
  TASKS,
  TASK_BY_ID,
  PACKAGES,
  DAY_START,
  DAY_END,
  HOUR_PX,
  SNAP,
  px,
  totalHeight,
  startToday,
  addBusinessDays,
  dateKey,
  fmtDayLabel,
  fmtDateLabel,
  fmtTime,
  fmtTimeShort,
  fmtDur,
  busyFor,
  openWindows,
  firstFit,
  fits,
  snapValid,
  snapStart,
  P,
  LineIcon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/zing-resident-app/data.jsx", error: String((e && e.message) || e) }); }

// export/zing-resident-app/onboarding.jsx
try { (() => {
/* Zing Resident App · Onboarding
   A calm, motion-forward welcome: 4 story screens that explain Zing (dedicated
   in-building cleaner, à-la-carte tasks, live calendar), then a 5-step setup
   (building, name, apartment, phone, pets) and a finish screen.
   Exposes <Onboarding onDone={profile => …} /> on window. */
const {
  useState,
  useEffect,
  useRef
} = React;
const {
  ICONS,
  P,
  LineIcon
} = window;
const STORY = [{
  key: "welcome",
  photo: "img/lobby-cart.png",
  photoPos: "60% center",
  eyebrow: "Welcome to Zing",
  title: "An extra set of hands, right down the hall.",
  body: "The dedicated cleaning service built into your building — book anything from a sink of dishes to a full apartment reset.",
  cta: "Get started"
}, {
  key: "cleaner",
  photo: "img/finished-satisfied.png",
  eyebrow: "Your building's team",
  title: "A Zing cleaner who already knows your building.",
  body: "A dedicated housekeeping team works right here — no strangers from across town, no long waits. Just help that's already close by.",
  cta: "Continue"
}, {
  key: "tasks",
  illus: "icons",
  eyebrow: "À la carte",
  title: "Book exactly what you need.",
  body: "Pick a single task or bundle a few into one visit. You only pay for what you book — nothing you don't.",
  cta: "Continue"
}, {
  key: "calendar",
  illus: "cal",
  eyebrow: "Live availability",
  title: "See what's open. Slide in your time.",
  body: "We work your building Monday to Friday, 8 to 6. Watch open slots update as you go and reserve the time that fits.",
  cta: "Let's set you up"
}];
const BUILDINGS = [{
  id: "bezel",
  name: "Bezel Miami",
  addr: "Edgewater, Miami",
  img: "img/bld/bezel.jpg"
}, {
  id: "muze",
  name: "Muze at Met",
  addr: "Downtown Miami",
  img: "img/bld/muze.jpg"
}, {
  id: "worldtower",
  name: "Miami World Tower",
  addr: "Miami Worldcenter",
  img: "img/bld/worldtower.jpg"
}, {
  id: "wynd27",
  name: "Wynd 27",
  addr: "Wynwood, Miami",
  img: "img/bld/wynd27.jpg"
}, {
  id: "wynd28",
  name: "Wynd 28",
  addr: "Wynwood, Miami",
  img: "img/bld/wynd28.jpg"
}, {
  id: "paraiso",
  name: "Paraíso Bayviews",
  addr: "Edgewater, Miami",
  img: "img/bld/paraiso.jpg"
}, {
  id: "forma",
  name: "Forma",
  addr: "Miami",
  img: "img/bld/forma.jpg"
}, {
  id: "hamilton",
  name: "The Hamilton",
  addr: "Edgewater, Miami",
  img: "img/bld/hamilton.jpg"
}];
const OB_ICONS = ["dishes.webp", "laundry.webp", "trash.webp", "bed.webp", "oven.webp", "window.webp", "plants.webp", "couch.webp", "folding.webp"];
const fmtPhone = v => {
  const d = v.replace(/\D/g, "").slice(0, 10);
  const a = d.slice(0, 3),
    b = d.slice(3, 6),
    c = d.slice(6, 10);
  if (d.length > 6) return `(${a}) ${b}-${c}`;
  if (d.length > 3) return `(${a}) ${b}`;
  if (d.length > 0) return `(${a}`;
  return "";
};
function Dots({
  n,
  i,
  over
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ob-dots" + (over ? " ob-dots--over" : "")
  }, Array.from({
    length: n
  }).map((_, k) => /*#__PURE__*/React.createElement("span", {
    key: k,
    className: "ob-dot" + (k === i ? " ob-dot--on" : "")
  })));
}
function IconGrid() {
  return /*#__PURE__*/React.createElement("div", {
    className: "ob-icons"
  }, OB_ICONS.map((ic, idx) => /*#__PURE__*/React.createElement("div", {
    key: ic,
    className: "ob-ico",
    style: {
      animationDelay: idx * 0.055 + 0.1 + "s"
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "ob-ico__img",
    src: ICONS + ic,
    alt: "",
    style: {
      animationDelay: idx * 0.09 + 0.7 + "s"
    }
  }))));
}
function CalPreview() {
  const hours = [8, 9, 10, 11, 12, 13];
  return /*#__PURE__*/React.createElement("div", {
    className: "ob-cal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ob-cal__hd"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ob-cal__day"
  }, "Tuesday"), /*#__PURE__*/React.createElement("div", {
    className: "ob-cal__chips"
  }, ["M", "T", "W", "T", "F"].map((d, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "ob-cal__chip" + (i === 1 ? " ob-cal__chip--on" : "")
  }, d)))), /*#__PURE__*/React.createElement("div", {
    className: "ob-cal__grid"
  }, hours.map(h => /*#__PURE__*/React.createElement(React.Fragment, {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    className: "ob-cal__row",
    style: {
      top: (h - 8) * 32
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "ob-cal__hr",
    style: {
      top: (h - 8) * 32
    }
  }, h > 12 ? h - 12 : h, h >= 12 ? "p" : "a"))), /*#__PURE__*/React.createElement("div", {
    className: "ob-cal__busy",
    style: {
      top: 8,
      height: 22,
      animationDelay: ".15s"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ob-cal__lbl"
  }, "Bathroom clean")), /*#__PURE__*/React.createElement("div", {
    className: "ob-cal__open",
    style: {
      top: 34,
      height: 70,
      animationDelay: ".25s"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "ob-cal__busy",
    style: {
      top: 108,
      height: 40,
      animationDelay: ".2s"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ob-cal__lbl"
  }, "Vacuum & floors")), /*#__PURE__*/React.createElement("div", {
    className: "ob-cal__sel",
    style: {
      top: 64,
      height: 32
    }
  }, /*#__PURE__*/React.createElement("b", null, "10:00 AM"), /*#__PURE__*/React.createElement("span", null, "Your visit \xB7 1 hr"))));
}
function Onboarding({
  onDone
}) {
  const SETUP = ["building", "name", "apt", "hometype", "baths", "phone", "verify", "pets"];
  const STEPS = ["welcome", "cleaner", "tasks", "calendar", ...SETUP, "done"];
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState("f");
  const [data, setData] = useState({
    building: "bezel",
    name: "Whit",
    apt: "1925",
    hometype: "1 Bedroom",
    baths: "1 Bathroom",
    phone: "(305) 555-1212",
    code: "248913",
    pets: ""
  });
  const inputRef = useRef(null);
  const key = STEPS[step];
  const isStory = step <= 3;
  const isSetup = SETUP.includes(key);
  const q = isSetup ? key : null;
  const setupIdx = SETUP.indexOf(key);
  const go = d => {
    setDir(d > 0 ? "f" : "b");
    setStep(s => Math.max(0, Math.min(STEPS.length - 1, s + d)));
  };
  const jumpTo = i => {
    setDir(i > step ? "f" : "b");
    setStep(i);
  };
  const set = (k, v) => setData(d => ({
    ...d,
    [k]: v
  }));
  useEffect(() => {
    if (["name", "apt", "phone", "pets"].includes(key)) {
      const t = setTimeout(() => inputRef.current && inputRef.current.focus(), 380);
      return () => clearTimeout(t);
    }
  }, [key]);
  const valid = q === "name" ? !!data.name.trim() : q === "apt" ? !!data.apt.trim() : q === "hometype" ? !!data.hometype : q === "baths" ? !!data.baths : q === "phone" ? data.phone.replace(/\D/g, "").length >= 10 : q === "verify" ? (data.code || "").length === 6 : true;
  const onEnter = e => {
    if (e.key === "Enter" && valid) go(1);
  };
  const bld = BUILDINGS.find(b => b.id === data.building) || BUILDINGS[0];
  const first = data.name.trim().split(/\s+/)[0];
  let inner;
  if (isStory) {
    const s = STORY[step];
    const foot = over => /*#__PURE__*/React.createElement("div", {
      className: "ob-foot" + (over ? " ob-foot--over" : "") + " ob-anim",
      style: {
        animationDelay: ".28s"
      }
    }, /*#__PURE__*/React.createElement(Dots, {
      n: STORY.length,
      i: step,
      over: over
    }), /*#__PURE__*/React.createElement("button", {
      className: "btn btn--primary btn--block",
      onClick: () => go(1)
    }, s.cta));
    if (s.photo) {
      inner = /*#__PURE__*/React.createElement("div", {
        className: "ob-media--full"
      }, /*#__PURE__*/React.createElement("img", {
        className: "ob-photo",
        src: s.photo,
        alt: "",
        style: {
          objectPosition: s.photoPos || "center"
        }
      }), /*#__PURE__*/React.createElement("div", {
        className: "ob-photo-shade"
      }), /*#__PURE__*/React.createElement("img", {
        className: "ob-logo",
        src: "img/zing-logo-cream.svg",
        alt: "Zing"
      }), /*#__PURE__*/React.createElement("button", {
        className: "ob-skip",
        onClick: () => jumpTo(4)
      }, "Skip"), /*#__PURE__*/React.createElement("div", {
        className: "ob-over"
      }, /*#__PURE__*/React.createElement("div", {
        className: "ob-copy--over"
      }, /*#__PURE__*/React.createElement("div", {
        className: "ob-eyebrow ob-anim",
        style: {
          animationDelay: ".05s"
        }
      }, s.eyebrow), /*#__PURE__*/React.createElement("h1", {
        className: "ob-title ob-anim",
        style: {
          animationDelay: ".12s"
        }
      }, s.title), /*#__PURE__*/React.createElement("p", {
        className: "ob-body ob-anim",
        style: {
          animationDelay: ".2s"
        }
      }, s.body)), foot(true)));
    } else {
      inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
        className: "ob-logo ob-logo--dark",
        src: "icons/zing-logo.svg",
        alt: "Zing"
      }), /*#__PURE__*/React.createElement("button", {
        className: "ob-skip ob-skip--dark",
        onClick: () => jumpTo(4)
      }, "Skip"), /*#__PURE__*/React.createElement("div", {
        className: "ob-illus"
      }, s.illus === "icons" ? /*#__PURE__*/React.createElement(IconGrid, null) : /*#__PURE__*/React.createElement(CalPreview, null)), /*#__PURE__*/React.createElement("div", {
        className: "ob-copy"
      }, /*#__PURE__*/React.createElement("div", {
        className: "ob-eyebrow ob-anim",
        style: {
          animationDelay: ".05s"
        }
      }, s.eyebrow), /*#__PURE__*/React.createElement("h1", {
        className: "ob-title ob-anim",
        style: {
          animationDelay: ".12s"
        }
      }, s.title), /*#__PURE__*/React.createElement("p", {
        className: "ob-body ob-anim",
        style: {
          animationDelay: ".2s"
        }
      }, s.body)), foot(false));
    }
  } else if (isSetup) {
    let qbody;
    if (q === "building") {
      qbody = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
        className: "ob-qtitle ob-anim",
        style: {
          animationDelay: ".05s"
        }
      }, "Where do you call home?"), /*#__PURE__*/React.createElement("p", {
        className: "ob-qsub ob-anim",
        style: {
          animationDelay: ".12s"
        }
      }, "Zing lives inside your building. Choose yours to get started."), /*#__PURE__*/React.createElement("div", {
        className: "ob-blds ob-anim",
        style: {
          animationDelay: ".18s"
        }
      }, BUILDINGS.map(b => /*#__PURE__*/React.createElement("button", {
        key: b.id,
        className: "ob-bld" + (data.building === b.id ? " ob-bld--on" : ""),
        onClick: () => set("building", b.id)
      }, /*#__PURE__*/React.createElement("img", {
        className: "ob-bld__img",
        src: b.img,
        alt: ""
      }), /*#__PURE__*/React.createElement("div", {
        className: "ob-bld__main"
      }, /*#__PURE__*/React.createElement("div", {
        className: "ob-bld__name"
      }, b.name), /*#__PURE__*/React.createElement("div", {
        className: "ob-bld__addr"
      }, b.addr)), /*#__PURE__*/React.createElement("span", {
        className: "ob-bld__tick"
      }, data.building === b.id && /*#__PURE__*/React.createElement(LineIcon, {
        d: P.check,
        w: 13,
        sw: 2.4
      }))))));
    } else if (q === "name") {
      qbody = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
        className: "ob-qtitle ob-anim",
        style: {
          animationDelay: ".05s"
        }
      }, "What should we call you?"), /*#__PURE__*/React.createElement("p", {
        className: "ob-qsub ob-anim",
        style: {
          animationDelay: ".12s"
        }
      }, "So your Zing cleaner can greet you by name."), /*#__PURE__*/React.createElement("input", {
        ref: inputRef,
        className: "ob-input ob-anim",
        style: {
          animationDelay: ".18s"
        },
        type: "text",
        placeholder: "Your name",
        value: data.name,
        onChange: e => set("name", e.target.value),
        onKeyDown: onEnter
      }));
    } else if (q === "apt") {
      qbody = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
        className: "ob-qtitle ob-anim",
        style: {
          animationDelay: ".05s"
        }
      }, "Which apartment are we cleaning?"), /*#__PURE__*/React.createElement("p", {
        className: "ob-qsub ob-anim",
        style: {
          animationDelay: ".12s"
        }
      }, "We'll only ever visit this unit at ", bld.name, "."), /*#__PURE__*/React.createElement("input", {
        ref: inputRef,
        className: "ob-input ob-anim",
        style: {
          animationDelay: ".18s"
        },
        type: "text",
        inputMode: "numeric",
        placeholder: "e.g. 1925",
        value: data.apt,
        onChange: e => set("apt", e.target.value),
        onKeyDown: onEnter
      }));
    } else if (q === "hometype") {
      const opts = ["Studio", "1 Bedroom", "2 Bedrooms", "3+ Bedrooms"];
      qbody = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
        className: "ob-qtitle ob-anim",
        style: {
          animationDelay: ".05s"
        }
      }, "What type of home do you have?"), /*#__PURE__*/React.createElement("p", {
        className: "ob-qsub ob-anim",
        style: {
          animationDelay: ".12s"
        }
      }, "This helps us give you accurate pricing for each clean."), /*#__PURE__*/React.createElement("div", {
        className: "ob-opts ob-anim",
        style: {
          animationDelay: ".18s"
        }
      }, opts.map(o => /*#__PURE__*/React.createElement("button", {
        key: o,
        className: "ob-opt" + (data.hometype === o ? " ob-opt--on" : ""),
        onClick: () => set("hometype", o)
      }, o))));
    } else if (q === "baths") {
      const opts = ["1 Bathroom", "1.5 Bathrooms", "2 Bathrooms", "3 Bathrooms"];
      qbody = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
        className: "ob-qtitle ob-anim",
        style: {
          animationDelay: ".05s"
        }
      }, "How many bathrooms does your place have?"), /*#__PURE__*/React.createElement("p", {
        className: "ob-qsub ob-anim",
        style: {
          animationDelay: ".12s"
        }
      }, "This helps us give you accurate pricing for each clean."), /*#__PURE__*/React.createElement("div", {
        className: "ob-opts ob-anim",
        style: {
          animationDelay: ".18s"
        }
      }, opts.map(o => /*#__PURE__*/React.createElement("button", {
        key: o,
        className: "ob-opt" + (data.baths === o ? " ob-opt--on" : ""),
        onClick: () => set("baths", o)
      }, o))));
    } else if (q === "phone") {
      qbody = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
        className: "ob-qtitle ob-anim",
        style: {
          animationDelay: ".05s"
        }
      }, "Where should we text you?"), /*#__PURE__*/React.createElement("p", {
        className: "ob-qsub ob-anim",
        style: {
          animationDelay: ".12s"
        }
      }, "For visit confirmations and arrival updates \u2014 nothing else."), /*#__PURE__*/React.createElement("input", {
        ref: inputRef,
        className: "ob-input ob-anim",
        style: {
          animationDelay: ".18s"
        },
        type: "tel",
        inputMode: "tel",
        placeholder: "(305) 000-0000",
        value: data.phone,
        onChange: e => set("phone", fmtPhone(e.target.value)),
        onKeyDown: onEnter
      }));
    } else if (q === "verify") {
      const digits = (data.code || "").split("");
      qbody = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
        className: "ob-qtitle ob-anim",
        style: {
          animationDelay: ".05s"
        }
      }, "Verify your number."), /*#__PURE__*/React.createElement("p", {
        className: "ob-qsub ob-anim",
        style: {
          animationDelay: ".12s"
        }
      }, "We texted a 6-digit code to ", data.phone || "your phone", "."), /*#__PURE__*/React.createElement("div", {
        className: "ob-code ob-anim",
        style: {
          animationDelay: ".18s"
        }
      }, [0, 1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "ob-code__box" + (digits[i] ? " ob-code__box--on" : "")
      }, digits[i] || ""))), /*#__PURE__*/React.createElement("div", {
        className: "ob-code__hint ob-anim",
        style: {
          animationDelay: ".24s"
        }
      }, /*#__PURE__*/React.createElement(LineIcon, {
        d: P.check,
        w: 14,
        sw: 2.2
      }), " Autofilled from Messages"));
    } else if (q === "pets") {
      qbody = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
        className: "ob-qtitle ob-anim",
        style: {
          animationDelay: ".05s"
        }
      }, "Anyone furry we should know about?"), /*#__PURE__*/React.createElement("p", {
        className: "ob-qsub ob-anim",
        style: {
          animationDelay: ".12s"
        }
      }, "Helps your cleaner arrive prepared. Totally optional."), /*#__PURE__*/React.createElement("input", {
        ref: inputRef,
        className: "ob-input ob-anim",
        style: {
          animationDelay: ".18s"
        },
        type: "text",
        placeholder: "e.g. friendly dog, shy cat\u2026",
        value: data.pets,
        onChange: e => set("pets", e.target.value),
        onKeyDown: onEnter
      }));
    }
    inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "ob-setup"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ob-setup__top"
    }, /*#__PURE__*/React.createElement("button", {
      className: "ob-back",
      onClick: () => go(-1),
      "aria-label": "Back"
    }, /*#__PURE__*/React.createElement(LineIcon, {
      d: P.left,
      w: 20
    })), /*#__PURE__*/React.createElement("div", {
      className: "ob-prog"
    }, SETUP.map((_, k) => /*#__PURE__*/React.createElement("span", {
      key: k,
      className: "ob-prog__seg" + (k <= setupIdx ? " ob-prog__seg--on" : "")
    }, /*#__PURE__*/React.createElement("i", null)))), /*#__PURE__*/React.createElement("span", {
      className: "ob-stepn"
    }, setupIdx + 1, "/", SETUP.length)), /*#__PURE__*/React.createElement("div", {
      className: "ob-setup__q"
    }, qbody)), /*#__PURE__*/React.createElement("div", {
      className: "ob-foot"
    }, q === "pets" && /*#__PURE__*/React.createElement("button", {
      className: "btn btn--ghost btn--block",
      onClick: () => {
        set("pets", "");
        go(1);
      }
    }, "I don't have any pets"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn--primary btn--block",
      disabled: !valid,
      onClick: () => go(1)
    }, q === "pets" ? "Finish" : "Continue")));
  } else {
    inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "ob-done"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ob-badge-wrap"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ob-done__ring"
    }), /*#__PURE__*/React.createElement("div", {
      className: "ob-done__badge"
    }, /*#__PURE__*/React.createElement(LineIcon, {
      d: P.check,
      w: 42,
      sw: 1.8
    }))), /*#__PURE__*/React.createElement("h1", {
      className: "ob-title",
      style: {
        marginTop: 22
      }
    }, "You're all set", first ? `, ${first}` : "", "."), /*#__PURE__*/React.createElement("p", {
      className: "ob-body",
      style: {
        maxWidth: 288
      }
    }, "Your Zing cleaner at ", bld.name, " is ready when you are. Let's book your first visit.")), /*#__PURE__*/React.createElement("div", {
      className: "ob-foot"
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn--primary btn--block",
      onClick: () => onDone(data)
    }, "Book your first clean")));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "ob"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ob__stage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ob-screen",
    "data-dir": dir,
    key: key
  }, inner)));
}
Object.assign(window, {
  Onboarding
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/zing-resident-app/onboarding.jsx", error: String((e && e.message) || e) }); }

// ui_kits/resident-app/app.jsx
try { (() => {
/* Zing Resident App — interactive mobile prototype.
   Built on the Zing design system: tokens + .zg-* component classes.
   Screens: Home menu → Service detail → Schedule → Confirmation, + Orders. */

const {
  useState
} = React;

/* ----------------------------- Icons ----------------------------- */
const I = {
  spark: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z",
  sink: "M3 11h18M5 11v5a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-5M12 11V6a2 2 0 0 1 2-2",
  towel: "M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6zM6 3a2 2 0 0 0-2 2v3h4",
  bed: "M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6M3 18h18M3 14h18M7 10V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",
  window: "M4 4h16v16H4zM12 4v16M4 12h16",
  fridge: "M6 3h12v18H6zM6 10h12M9 6v2M9 13v3",
  home: "M3 11l9-8 9 8M5 9v11h14V9",
  bag: "M6 8h12l-1 13H7zM9 8V6a3 3 0 0 1 6 0v2",
  user: "M4 20a8 8 0 0 1 16 0M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8",
  arrow: "M5 12h14M13 6l6 6-6 6",
  back: "M19 12H5M11 18l-6-6 6-6",
  clock: "M12 7v5l3 2M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18",
  check: "M5 12l5 5L20 7"
};
const Icon = ({
  d,
  w = 22
}) => /*#__PURE__*/React.createElement("svg", {
  width: w,
  height: w,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.6",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: d
}));

/* --------------------------- Service data ------------------------- */
const SERVICES = [{
  id: "bath",
  icon: I.spark,
  title: "Bathroom refresh",
  time: 25,
  price: 28,
  blurb: "Mirror, sink, counters and a fresh set of folded towels.",
  img: "../../assets/imagery/bathroom-mirror.png",
  loved: true
}, {
  id: "kitchen",
  icon: I.sink,
  title: "Kitchen touch-up",
  time: 20,
  price: 24,
  blurb: "Counters, sink and stovetop wiped to a quiet shine.",
  img: "../../assets/imagery/wiping-counter.png"
}, {
  id: "towels",
  icon: I.towel,
  title: "Fresh towel service",
  time: 15,
  price: 18,
  blurb: "Plush, hotel-style towels — swapped and restocked.",
  img: "../../assets/imagery/fresh-towels.png"
}, {
  id: "floors",
  icon: I.home,
  title: "Floors & living room",
  time: 30,
  price: 32,
  blurb: "Vacuum, mop and a gentle tidy of the main space.",
  img: "../../assets/imagery/vacuum-living.png"
}, {
  id: "dining",
  icon: I.window,
  title: "Dining reset",
  time: 20,
  price: 22,
  blurb: "Table cleared, wiped and set calm for the evening.",
  img: "../../assets/imagery/dining-table.png"
}];

/* ----------------------------- Chrome ----------------------------- */
function StatusBar({
  dark
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "statusbar",
    style: {
      color: dark ? "var(--paper-50)" : "var(--forest-800)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    className: "dots"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null)));
}
function BottomNav({
  tab,
  setTab
}) {
  const items = [{
    id: "home",
    label: "Services",
    d: I.spark
  }, {
    id: "orders",
    label: "Orders",
    d: I.bag
  }, {
    id: "account",
    label: "Account",
    d: I.user
  }];
  return /*#__PURE__*/React.createElement("nav", {
    className: "bottomnav"
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    className: "navbtn" + (tab === it.id ? " navbtn--active" : ""),
    onClick: () => setTab(it.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    d: it.d,
    w: 22
  }), /*#__PURE__*/React.createElement("span", null, it.label))));
}

/* ----------------------------- Screens ---------------------------- */
function Home({
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "screen"
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("header", {
    className: "home-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "zing-eyebrow"
  }, "The Hamilton \xB7 Apt 1408"), /*#__PURE__*/React.createElement("h1", {
    className: "serif-h1"
  }, "Good morning, Ana.")), /*#__PURE__*/React.createElement("span", {
    className: "zg-avatar zg-avatar--lg"
  }, "AM")), /*#__PURE__*/React.createElement("div", {
    className: "hero-card",
    style: {
      backgroundImage: "url('../../assets/imagery/breakfast-cart-lobby.jpg')"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-veil"
  }, /*#__PURE__*/React.createElement("span", {
    className: "zg-badge zg-badge--accent"
  }, "This week"), /*#__PURE__*/React.createElement("div", {
    className: "hero-title"
  }, "Resident breakfast,", /*#__PURE__*/React.createElement("br", null), "Friday at 8."), /*#__PURE__*/React.createElement("button", {
    className: "zg-btn zg-btn--secondary zg-btn--sm"
  }, "Reserve a morning"))), /*#__PURE__*/React.createElement("div", {
    className: "section-row"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Order a service"), /*#__PURE__*/React.createElement("span", {
    className: "section-link"
  }, "Down the hall \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "menu"
  }, SERVICES.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.id,
    className: "zg-row zg-row--interactive",
    onClick: () => onOpen(s)
  }, /*#__PURE__*/React.createElement("div", {
    className: "zg-row__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    d: s.icon
  })), /*#__PURE__*/React.createElement("div", {
    className: "zg-row__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "zg-row__title"
  }, s.title, s.loved && /*#__PURE__*/React.createElement("span", {
    className: "zg-badge zg-badge--accent",
    style: {
      marginLeft: 8,
      verticalAlign: "middle"
    }
  }, "Loved")), /*#__PURE__*/React.createElement("div", {
    className: "zg-row__sub"
  }, "~", s.time, " min")), /*#__PURE__*/React.createElement("div", {
    className: "zg-row__meta"
  }, "$", s.price)))));
}
function Detail({
  service,
  onBack,
  onReserve
}) {
  const [freq, setFreq] = useState("once");
  const [towels, setTowels] = useState(true);
  const [restock, setRestock] = useState(false);
  const addons = (towels ? 6 : 0) + (restock ? 8 : 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "screen screen--flush"
  }, /*#__PURE__*/React.createElement("div", {
    className: "detail-media",
    style: {
      backgroundImage: `url('${service.img}')`
    }
  }, /*#__PURE__*/React.createElement(StatusBar, {
    dark: true
  }), /*#__PURE__*/React.createElement("button", {
    className: "round-back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(Icon, {
    d: I.back,
    w: 20
  }))), /*#__PURE__*/React.createElement("div", {
    className: "detail-body"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "serif-h1"
  }, service.title), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, service.blurb), /*#__PURE__*/React.createElement("div", {
    className: "meta-line"
  }, /*#__PURE__*/React.createElement(Icon, {
    d: I.clock,
    w: 16
  }), " About ", service.time, " minutes \xB7 handled by a vetted Zing host"), /*#__PURE__*/React.createElement("div", {
    className: "field-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "zg-label"
  }, "How often?"), /*#__PURE__*/React.createElement("div", {
    className: "zg-segment",
    role: "tablist"
  }, [["once", "One-time"], ["weekly", "Weekly"], ["biweekly", "Bi-weekly"]].map(([v, l]) => /*#__PURE__*/React.createElement("button", {
    key: v,
    "aria-selected": freq === v,
    onClick: () => setFreq(v)
  }, l)))), /*#__PURE__*/React.createElement("div", {
    className: "field-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "zg-label"
  }, "Add a touch"), /*#__PURE__*/React.createElement("label", {
    className: "zg-check addon"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: towels,
    onChange: e => setTowels(e.target.checked)
  }), /*#__PURE__*/React.createElement("span", {
    className: "zg-check__box"
  }, /*#__PURE__*/React.createElement(Icon, {
    d: I.check,
    w: 14
  })), /*#__PURE__*/React.createElement("span", null, "Fresh towels"), /*#__PURE__*/React.createElement("b", null, "+$6")), /*#__PURE__*/React.createElement("label", {
    className: "zg-check addon"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: restock,
    onChange: e => setRestock(e.target.checked)
  }), /*#__PURE__*/React.createElement("span", {
    className: "zg-check__box"
  }, /*#__PURE__*/React.createElement(Icon, {
    d: I.check,
    w: 14
  })), /*#__PURE__*/React.createElement("span", null, "Restock essentials"), /*#__PURE__*/React.createElement("b", null, "+$8")))), /*#__PURE__*/React.createElement("div", {
    className: "detail-foot"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "foot-label"
  }, "Total"), /*#__PURE__*/React.createElement("div", {
    className: "foot-price"
  }, "$", service.price + addons)), /*#__PURE__*/React.createElement("button", {
    className: "zg-btn zg-btn--primary zg-btn--lg",
    onClick: () => onReserve(service, service.price + addons)
  }, "Reserve ", /*#__PURE__*/React.createElement(Icon, {
    d: I.arrow,
    w: 18
  }))));
}
function Schedule({
  onConfirm,
  onBack
}) {
  const [slot, setSlot] = useState("morning");
  return /*#__PURE__*/React.createElement("div", {
    className: "screen"
  }, /*#__PURE__*/React.createElement("header", {
    className: "sub-head"
  }, /*#__PURE__*/React.createElement("button", {
    className: "round-back round-back--light",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(Icon, {
    d: I.back,
    w: 20
  })), /*#__PURE__*/React.createElement("h2", {
    className: "sub-title"
  }, "When works for you?")), /*#__PURE__*/React.createElement("div", {
    className: "day-row"
  }, ["Tue 10", "Wed 11", "Thu 12", "Fri 13"].map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: d,
    className: "daychip" + (i === 1 ? " daychip--on" : "")
  }, /*#__PURE__*/React.createElement("span", null, d.split(" ")[0]), /*#__PURE__*/React.createElement("b", null, d.split(" ")[1])))), /*#__PURE__*/React.createElement("div", {
    className: "field-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "zg-label"
  }, "Arrival window"), /*#__PURE__*/React.createElement("div", {
    className: "slot-list"
  }, [["morning", "Morning", "8:00 – 11:00am"], ["midday", "Midday", "11:00 – 2:00pm"], ["afternoon", "Afternoon", "2:00 – 5:00pm"]].map(([v, l, t]) => /*#__PURE__*/React.createElement("label", {
    key: v,
    className: "slot" + (slot === v ? " slot--on" : ""),
    onClick: () => setSlot(v)
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "slot-l"
  }, l), /*#__PURE__*/React.createElement("div", {
    className: "slot-t"
  }, t)), /*#__PURE__*/React.createElement("span", {
    className: "slot-radio"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "field-block"
  }, /*#__PURE__*/React.createElement("label", {
    className: "zg-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "zg-label"
  }, "Access note"), /*#__PURE__*/React.createElement("input", {
    className: "zg-input",
    defaultValue: "Doorman has a key \u2014 please text on arrival."
  }))), /*#__PURE__*/React.createElement("div", {
    className: "screen-foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "zg-btn zg-btn--primary zg-btn--block zg-btn--lg",
    onClick: onConfirm
  }, "Confirm reservation")));
}
function Confirm({
  summary,
  onDone
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "screen screen--center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "confirm-badge"
  }, /*#__PURE__*/React.createElement(Icon, {
    d: I.check,
    w: 34
  })), /*#__PURE__*/React.createElement("h1", {
    className: "serif-h1",
    style: {
      textAlign: "center"
    }
  }, "You're all set."), /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      textAlign: "center",
      maxWidth: 280
    }
  }, summary.title, " is reserved for Wednesday, 8\u201311am. We'll take it from here."), /*#__PURE__*/React.createElement("div", {
    className: "confirm-card zg-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "zg-card__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cc-row"
  }, /*#__PURE__*/React.createElement("span", null, "Service"), /*#__PURE__*/React.createElement("b", null, summary.title)), /*#__PURE__*/React.createElement("div", {
    className: "cc-row"
  }, /*#__PURE__*/React.createElement("span", null, "When"), /*#__PURE__*/React.createElement("b", null, "Wed Mar 11 \xB7 Morning")), /*#__PURE__*/React.createElement("div", {
    className: "cc-row"
  }, /*#__PURE__*/React.createElement("span", null, "Apartment"), /*#__PURE__*/React.createElement("b", null, "The Hamilton \xB7 1408")), /*#__PURE__*/React.createElement("div", {
    className: "cc-row cc-total"
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("b", null, "$", summary.total)))), /*#__PURE__*/React.createElement("button", {
    className: "zg-btn zg-btn--outline zg-btn--block",
    onClick: onDone
  }, "Back to services"));
}
function Orders({
  onBrowse
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "screen"
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("header", {
    className: "home-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "zing-eyebrow"
  }, "Your history"), /*#__PURE__*/React.createElement("h1", {
    className: "serif-h1"
  }, "My orders"))), /*#__PURE__*/React.createElement("div", {
    className: "menu"
  }, /*#__PURE__*/React.createElement("div", {
    className: "zg-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "zg-row__icon",
    style: {
      background: "var(--success-100)",
      color: "var(--success-600)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: I.check
  })), /*#__PURE__*/React.createElement("div", {
    className: "zg-row__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "zg-row__title"
  }, "Bathroom refresh"), /*#__PURE__*/React.createElement("div", {
    className: "zg-row__sub"
  }, "Mar 4 \xB7 Completed")), /*#__PURE__*/React.createElement("span", {
    className: "zg-badge zg-badge--success"
  }, "Done")), /*#__PURE__*/React.createElement("div", {
    className: "zg-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "zg-row__icon",
    style: {
      background: "var(--warning-100)",
      color: "var(--warning-600)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: I.clock
  })), /*#__PURE__*/React.createElement("div", {
    className: "zg-row__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "zg-row__title"
  }, "Fresh towel service"), /*#__PURE__*/React.createElement("div", {
    className: "zg-row__sub"
  }, "Tomorrow \xB7 Morning")), /*#__PURE__*/React.createElement("span", {
    className: "zg-badge zg-badge--warning"
  }, "Scheduled"))), /*#__PURE__*/React.createElement("div", {
    className: "empty-cta"
  }, /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      textAlign: "center"
    }
  }, "Need something else handled?"), /*#__PURE__*/React.createElement("button", {
    className: "zg-btn zg-btn--primary",
    onClick: onBrowse
  }, "Browse services")));
}
function Account() {
  return /*#__PURE__*/React.createElement("div", {
    className: "screen"
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("header", {
    className: "home-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "zing-eyebrow"
  }, "The Hamilton \xB7 1408"), /*#__PURE__*/React.createElement("h1", {
    className: "serif-h1"
  }, "Ana Marlowe")), /*#__PURE__*/React.createElement("span", {
    className: "zg-avatar zg-avatar--lg"
  }, "AM")), /*#__PURE__*/React.createElement("div", {
    className: "menu"
  }, ["Payment methods", "Saved preferences", "Building & access", "Notifications", "Help & concierge"].map(l => /*#__PURE__*/React.createElement("div", {
    key: l,
    className: "zg-row zg-row--interactive"
  }, /*#__PURE__*/React.createElement("div", {
    className: "zg-row__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "zg-row__title"
  }, l)), /*#__PURE__*/React.createElement(Icon, {
    d: I.arrow,
    w: 18
  })))));
}

/* ------------------------------ App ------------------------------- */
function App() {
  const [tab, setTab] = useState("home");
  const [flow, setFlow] = useState(null); // null | {step, service, total}

  const open = service => setFlow({
    step: "detail",
    service,
    total: service.price
  });
  const reserve = (service, total) => setFlow({
    step: "schedule",
    service,
    total
  });
  const confirm = () => setFlow(f => ({
    ...f,
    step: "confirm"
  }));
  const done = () => {
    setFlow(null);
    setTab("orders");
  };
  let body;
  if (flow?.step === "detail") body = /*#__PURE__*/React.createElement(Detail, {
    service: flow.service,
    onBack: () => setFlow(null),
    onReserve: reserve
  });else if (flow?.step === "schedule") body = /*#__PURE__*/React.createElement(Schedule, {
    onConfirm: confirm,
    onBack: () => setFlow({
      ...flow,
      step: "detail"
    })
  });else if (flow?.step === "confirm") body = /*#__PURE__*/React.createElement(Confirm, {
    summary: {
      title: flow.service.title,
      total: flow.total
    },
    onDone: done
  });else if (tab === "home") body = /*#__PURE__*/React.createElement(Home, {
    onOpen: open
  });else if (tab === "orders") body = /*#__PURE__*/React.createElement(Orders, {
    onBrowse: () => setTab("home")
  });else body = /*#__PURE__*/React.createElement(Account, null);
  const hideNav = flow?.step === "detail" || flow?.step === "schedule";
  return /*#__PURE__*/React.createElement("div", {
    className: "phone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "phone-screen"
  }, body, !hideNav && /*#__PURE__*/React.createElement(BottomNav, {
    tab: tab,
    setTab: t => {
      setFlow(null);
      setTab(t);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "phone-notch"
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/resident-app/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/resident-scheduling/app.jsx
try { (() => {
/* Zing Resident App · hero task grid + floating availability bar that opens a
   dedicated full-page time picker.
   Tabs: Home · Your bookings · Profile.
   Home = browse tasks/packages (2-col grid, toggle) and add to cart; a compact
   bar hovers above the nav showing the running total + 5-day availability
   (green/red dot + tint). Tapping it opens a chrome-less booking page (back
   button only) to place the visit on the calendar and reserve. */
const {
  useState,
  useMemo,
  useEffect
} = React;
const {
  ICONS,
  TASKS,
  TASK_BY_ID,
  PACKAGES,
  startToday,
  addBusinessDays,
  fmtDayLabel,
  fmtDateLabel,
  fmtTime,
  fmtDur,
  busyFor,
  snapValid,
  firstFit,
  fits,
  P,
  LineIcon,
  AppBar,
  BottomNav,
  Segmented,
  TaskCard,
  GhostCard,
  PackageCard,
  DayChips,
  TimelineLegend,
  Timeline
} = window;
const {
  Onboarding
} = window;
const FREQS = ["One-time", "Weekly", "Bi-weekly", "Monthly"];
const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const MONTHS_FULL = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const WEEK = 5;
const BUSINESS_DAYS = Array.from({
  length: 45
}, (_, i) => addBusinessDays(startToday(), i));
const FIVE = BUSINESS_DAYS.slice(0, 5);
const monthLabel = (a, b) => a.getMonth() === b.getMonth() ? `${MONTHS_FULL[a.getMonth()]} ${a.getFullYear()}` : `${MONTHS[a.getMonth()]} – ${MONTHS[b.getMonth()]} ${b.getFullYear()}`;
const titleOf = items => items.length === 1 ? items[0].name : `${items[0].name} + ${items.length - 1} more`;

/* ============================ Package detail sheet ============================ */
function PackageModal({
  pkg,
  added,
  onClose,
  onAdd
}) {
  const tasks = pkg.tasks.map(id => TASK_BY_ID[id]);
  const dur = tasks.reduce((s, t) => s + t.dur, 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: "sheet__close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.close,
    w: 16
  })), /*#__PURE__*/React.createElement("h3", {
    className: "sheet__title"
  }, pkg.name), /*#__PURE__*/React.createElement("div", {
    className: "sheet__price"
  }, "$", pkg.price, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--ink-500)"
    }
  }, "/ visit")), /*#__PURE__*/React.createElement("div", {
    className: "sheet__dur"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.clock,
    w: 14
  }), " About ", fmtDur(dur), " per visit"), /*#__PURE__*/React.createElement("p", {
    className: "sheet__desc"
  }, "A curated bundle handled in one visit.", pkg.off ? " Save up to 15% on recurring orders." : ""), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "2px 2px 18px"
    }
  }, tasks.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    className: "citem"
  }, /*#__PURE__*/React.createElement("div", {
    className: "citem__icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: ICONS + t.icon,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "citem__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "citem__name"
  }, t.name), /*#__PURE__*/React.createElement("div", {
    className: "citem__meta"
  }, "~", fmtDur(t.dur))), /*#__PURE__*/React.createElement("div", {
    className: "citem__price"
  }, "$", t.price)))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary btn--block",
    onClick: () => onAdd(pkg)
  }, added ? "Remove from cart" : "Add package to cart")));
}

/* ============================ Floating availability bar ============================ */
function FloatingBar({
  cart,
  dayIdx,
  setDayIdx,
  onOpen
}) {
  const dur = cart.reduce((s, c) => s + c.dur, 0);

  // Auto-track availability: always land on the earliest day that fits the current
  // visit. Adding tasks pushes forward past full days; removing tasks pulls back to
  // a sooner opening.
  useEffect(() => {
    if (dur === 0) return;
    const firstAvail = BUSINESS_DAYS.findIndex(d => firstFit(busyFor(d), dur) != null);
    if (firstAvail >= 0 && firstAvail !== dayIdx) setDayIdx(firstAvail);
  }, [dur]);

  // 5-day preview window that always keeps the selected day in view.
  const winStart = dayIdx < WEEK ? 0 : Math.min(dayIdx, BUSINESS_DAYS.length - WEEK);
  const days = BUSINESS_DAYS.slice(winStart, winStart + WEEK);
  const date = BUSINESS_DAYS[dayIdx];
  const active = dur > 0;
  return /*#__PURE__*/React.createElement("div", {
    className: "fbar",
    onClick: onOpen
  }, /*#__PURE__*/React.createElement("div", {
    className: "fbar__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fbar__total"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fbar__ic"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.clock,
    w: 17
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fbar__big"
  }, active ? `~${fmtDur(dur)}` : "No tasks yet"), /*#__PURE__*/React.createElement("div", {
    className: "fbar__sub"
  }, active ? `${cart.length} ${cart.length === 1 ? "task" : "tasks"} · Tap to pick a time` : "Add tasks to build a visit"))), /*#__PURE__*/React.createElement("div", {
    className: "fbar__day"
  }, /*#__PURE__*/React.createElement("b", null, fmtDayLabel(date)), /*#__PURE__*/React.createElement("span", null, fmtDateLabel(date)))), /*#__PURE__*/React.createElement(DayChips, {
    days: days,
    idx: dayIdx - winStart,
    onPick: i => {
      setDayIdx(winStart + i);
      onOpen();
    },
    dur: dur
  }));
}

/* ============================ Dedicated booking page ============================ */
function BookingPage({
  cart,
  dayIdx,
  setDayIdx,
  onBack,
  onReserve
}) {
  const dur = cart.reduce((s, c) => s + c.dur, 0);
  const date = BUSINESS_DAYS[dayIdx];
  const busy = useMemo(() => busyFor(date), [dayIdx]);
  const [selStart, setSelStart] = useState(null);
  const [weekStart, setWeekStart] = useState(Math.floor(dayIdx / WEEK) * WEEK);
  const active = dur > 0;
  useEffect(() => {
    if (dur === 0) {
      setSelStart(null);
      return;
    }
    setSelStart(prev => prev != null && fits(busy, prev, dur) ? prev : firstFit(busy, dur));
  }, [dur, dayIdx]);
  const weekDays = BUSINESS_DAYS.slice(weekStart, weekStart + WEEK);
  const localSel = dayIdx - weekStart;
  const goWeek = delta => {
    const ns = weekStart + delta * WEEK;
    if (ns < 0 || ns >= BUSINESS_DAYS.length) return;
    setWeekStart(ns);
    setDayIdx(Math.min(BUSINESS_DAYS.length - 1, ns + dayIdx % WEEK));
  };
  const pick = raw => {
    const s = snapStart(busy, raw, dur);
    if (s != null) setSelStart(s);
  };
  const nudge = d => {
    if (selStart == null) return;
    const n = selStart + d;
    if (fits(busy, n, dur)) setSelStart(n);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "bookpage page-anim"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bookhead"
  }, /*#__PURE__*/React.createElement("div", {
    className: "subhead"
  }, /*#__PURE__*/React.createElement("button", {
    className: "back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.left,
    w: 20
  })), /*#__PURE__*/React.createElement("h2", null, "Pick your time")), /*#__PURE__*/React.createElement("div", {
    className: "visitbar",
    style: {
      marginTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "visitbar__ring"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.clock,
    w: 30,
    sw: 1.4
  })), /*#__PURE__*/React.createElement("div", {
    className: "visitbar__t"
  }, /*#__PURE__*/React.createElement("div", {
    className: "visitbar__big"
  }, active ? `~${fmtDur(dur)}` : "No tasks yet"), /*#__PURE__*/React.createElement("div", {
    className: "visitbar__sub"
  }, active ? `${cart.length} ${cart.length === 1 ? "task" : "tasks"} · one visit` : "Add tasks on the home screen"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "weeknav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "weeknav__arrow",
    onClick: () => goWeek(-1),
    disabled: weekStart === 0,
    "aria-label": "Previous week"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.left,
    w: 18
  })), /*#__PURE__*/React.createElement("div", {
    className: "weeknav__label"
  }, /*#__PURE__*/React.createElement("b", null, monthLabel(weekDays[0], weekDays[weekDays.length - 1])), /*#__PURE__*/React.createElement("span", null, weekStart === 0 ? "This week" : `${MONTHS[weekDays[0].getMonth()]} ${weekDays[0].getDate()} – ${MONTHS[weekDays[weekDays.length - 1].getMonth()]} ${weekDays[weekDays.length - 1].getDate()}`)), /*#__PURE__*/React.createElement("button", {
    className: "weeknav__arrow",
    onClick: () => goWeek(1),
    disabled: weekStart + WEEK >= BUSINESS_DAYS.length,
    "aria-label": "Next week"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.right,
    w: 18
  }))), /*#__PURE__*/React.createElement(DayChips, {
    days: weekDays,
    idx: localSel,
    onPick: i => setDayIdx(weekStart + i),
    dur: dur,
    variant: "page"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(TimelineLegend, {
    booking: active
  }), active && /*#__PURE__*/React.createElement("div", {
    className: "pickcue"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.clock,
    w: 15
  }), " Tap an open slot or drag your visit to set a time"), !active && /*#__PURE__*/React.createElement("div", {
    className: "bookhint"
  }, "Add a task on the home screen to reserve \u2014 you can still preview open slots below."))), /*#__PURE__*/React.createElement("div", {
    className: "bookcal"
  }, /*#__PURE__*/React.createElement("div", {
    key: dayIdx,
    className: "slide-anim"
  }, /*#__PURE__*/React.createElement(Timeline, {
    busy: busy,
    dur: active ? dur : null,
    selStart: active ? selStart : null,
    onPick: active ? pick : null,
    onDragStart: active ? pick : null,
    showOpen: true
  })), active && selStart == null && /*#__PURE__*/React.createElement("div", {
    className: "stepper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stepper__lbl"
  }, "No open block fits this visit \u2014 try another day (red = full)."))), /*#__PURE__*/React.createElement("div", {
    className: "stickyfoot stickyfoot--page"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary btn--block",
    disabled: active && selStart == null,
    onClick: () => active ? onReserve({
      date,
      start: selStart,
      dur
    }) : onBack()
  }, active ? selStart != null ? `Continue – ${fmtTime(selStart)} to ${fmtTime(selStart + dur)}` : "Pick a time on the calendar" : "Add a task to reserve")));
}

/* ============================ Faux Apple Pay sheet ============================ */
const FACE_ID = "M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2";
function ApplePaySheet({
  amount,
  onCancel,
  onDone,
  building = "Bezel Miami",
  apt = "1925"
}) {
  const [stage, setStage] = useState("auth");
  useEffect(() => {
    const t = setTimeout(() => setStage("ok"), 1700);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    if (stage === "ok") {
      const t = setTimeout(onDone, 950);
      return () => clearTimeout(t);
    }
  }, [stage]);
  return /*#__PURE__*/React.createElement("div", {
    className: "ap-scrim",
    onClick: onCancel
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-sheet",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("span", {
    className: "ap-side"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ap-grab"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ap-head"
  }, /*#__PURE__*/React.createElement("b", null, "Apple Pay"), /*#__PURE__*/React.createElement("button", {
    className: "ap-x",
    onClick: onCancel
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "ap-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-row__ic"
  }, "ZING"), /*#__PURE__*/React.createElement("div", {
    className: "ap-row__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-row__t"
  }, "Zing \xB7 ", building), /*#__PURE__*/React.createElement("div", {
    className: "ap-row__s"
  }, "Apartment ", apt))), /*#__PURE__*/React.createElement("div", {
    className: "ap-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-row__ic",
    style: {
      background: "linear-gradient(135deg,#1a1a2e,#39507a)"
    }
  }, "VISA"), /*#__PURE__*/React.createElement("div", {
    className: "ap-row__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-row__t"
  }, "Visa  \xB7\xB7\xB7\xB7  4242"), /*#__PURE__*/React.createElement("div", {
    className: "ap-row__s"
  }, "Default Card")), /*#__PURE__*/React.createElement("span", {
    className: "ap-row__chev"
  }, "\u203A")), /*#__PURE__*/React.createElement("div", {
    className: "ap-row ap-row--total"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-row__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-row__t"
  }, "Pay Zing")), /*#__PURE__*/React.createElement("div", {
    className: "ap-amt"
  }, "$", amount.toFixed(2))), /*#__PURE__*/React.createElement("div", {
    className: "ap-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-face" + (stage === "ok" ? " ap-face--ok" : "")
  }, stage === "ok" ? /*#__PURE__*/React.createElement(LineIcon, {
    d: P.check,
    w: 26,
    sw: 2.4
  }) : /*#__PURE__*/React.createElement("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: FACE_ID
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 10v1.2M15 10v1.2M12 10v2.6l-1 .8M9.6 15.2c.7.6 1.5.9 2.4.9s1.7-.3 2.4-.9"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ap-cta"
  }, stage === "ok" ? "Done" : "Double-Click to Pay"))));
}

/* ============================ Checkout ============================ */
const ENTRY_OPTS = ["I'll be home", "The door's unlocked — come on in", "Use the Zing Access Station"];
const FREQ_SUB = {
  "One-time": "",
  "Weekly": "Save 15%",
  "Bi-weekly": "Save 10%",
  "Monthly": "Save 5%"
};
const FREQ_OFF = {
  "One-time": 0,
  "Weekly": 0.15,
  "Bi-weekly": 0.10,
  "Monthly": 0.05
};
function Checkout({
  cart,
  booking,
  freq,
  setFreq,
  onBack,
  onPlaceOrder,
  profile = {
    building: "Bezel Miami",
    apt: "1925"
  }
}) {
  const subtotal = cart.reduce((s, c) => s + c.price, 0);
  const [tip, setTip] = useState({
    mode: "pct",
    pct: 18
  });
  const [coupon, setCoupon] = useState("");
  const [applied, setApplied] = useState(null);
  const [entry, setEntry] = useState("");
  const [notes, setNotes] = useState("");
  const [pay, setPay] = useState("apple");
  const [card, setCard] = useState({
    num: "",
    exp: "",
    cvc: "",
    zip: ""
  });
  const [apOpen, setApOpen] = useState(false);
  const tipAmt = tip.mode === "pct" ? Math.round(subtotal * tip.pct) / 100 : tip.mode === "custom" ? parseFloat(tip.custom) || 0 : 0;
  const planOff = Math.round(subtotal * FREQ_OFF[freq] * 100) / 100;
  const discount = applied ? Math.round(subtotal * 0.1 * 100) / 100 : 0;
  const total = Math.max(0, subtotal - planOff - discount + tipAmt);
  const cardOk = card.num.replace(/\s/g, "").length >= 12 && card.exp.length >= 4 && card.cvc.length >= 3;
  const ready = entry !== "" && (pay === "apple" || cardOk);
  const place = () => onPlaceOrder({
    tip: tipAmt,
    discount,
    total,
    freq,
    entry,
    notes,
    pay: pay === "apple" ? "Apple Pay" : "Visa ····4242"
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "bookpage page-anim"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cohead"
  }, /*#__PURE__*/React.createElement("div", {
    className: "subhead"
  }, /*#__PURE__*/React.createElement("button", {
    className: "back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.left,
    w: 20
  })), /*#__PURE__*/React.createElement("h2", null, "Last step")), /*#__PURE__*/React.createElement("div", {
    className: "recap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "recap__ic"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.cal,
    w: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "recap__t"
  }, fmtDayLabel(booking.date), ", ", fmtDateLabel(booking.date), " \xB7 ", fmtTime(booking.start), "\u2013", fmtTime(booking.start + booking.dur)), /*#__PURE__*/React.createElement("div", {
    className: "recap__s"
  }, cart.length, " ", cart.length === 1 ? "task" : "tasks", " \xB7 ~", fmtDur(booking.dur), " \xB7 ", profile.building, " ", profile.apt)))), /*#__PURE__*/React.createElement("div", {
    className: "cobody"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card card--active"
  }, /*#__PURE__*/React.createElement("div", {
    className: "secttl"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.refresh,
    w: 17
  }), " How often?"), /*#__PURE__*/React.createElement("div", {
    className: "freqgrid"
  }, FREQS.map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    className: freq === f ? "freqgrid__on" : "",
    onClick: () => setFreq(f)
  }, f, FREQ_SUB[f] ? /*#__PURE__*/React.createElement("span", {
    className: "freqgrid__sub"
  }, FREQ_SUB[f]) : null)))), /*#__PURE__*/React.createElement("div", {
    className: "card" + (entry ? " card--active" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "secttl"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.home,
    w: 17
  }), " How will we get in?"), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "selectwrap"
  }, /*#__PURE__*/React.createElement("select", {
    value: entry,
    onChange: e => setEntry(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select an option\u2026"), ENTRY_OPTS.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))))), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, "Any entry or special instructions?"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Knock before entering, friendly dog inside\u2026",
    value: notes,
    onChange: e => setNotes(e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "card" + (tip.mode !== "none" && (tip.mode === "pct" || tipAmt > 0) ? " card--active" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "secttl"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.spark,
    w: 17
  }), " Add a tip for your Zing cleaner"), /*#__PURE__*/React.createElement("div", {
    className: "tiprow"
  }, [15, 18, 20].map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    className: "tipbtn" + (tip.mode === "pct" && tip.pct === p ? " tipbtn--on" : ""),
    onClick: () => setTip({
      mode: "pct",
      pct: p
    })
  }, p, "%", /*#__PURE__*/React.createElement("small", null, "$", (Math.round(subtotal * p) / 100).toFixed(2))))), /*#__PURE__*/React.createElement("div", {
    className: "tipcustom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tipcustom__wrap"
  }, /*#__PURE__*/React.createElement("span", null, "$"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    inputMode: "decimal",
    placeholder: "Add a custom amount",
    value: tip.mode === "custom" ? tip.custom || "" : "",
    onChange: e => setTip({
      mode: "custom",
      custom: e.target.value.replace(/[^0-9.]/g, "")
    })
  }))), /*#__PURE__*/React.createElement("button", {
    className: "notip" + (tip.mode === "none" ? " notip--on" : ""),
    onClick: () => setTip({
      mode: "none"
    })
  }, "No tip")), /*#__PURE__*/React.createElement("div", {
    className: "card card--active"
  }, /*#__PURE__*/React.createElement("div", {
    className: "secttl"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.cart,
    w: 17
  }), " Payment"), /*#__PURE__*/React.createElement("div", {
    className: "paymethod"
  }, /*#__PURE__*/React.createElement("div", {
    className: "payopt" + (pay === "apple" ? " payopt--on" : ""),
    onClick: () => setPay("apple")
  }, /*#__PURE__*/React.createElement("div", {
    className: "payopt__radio"
  }), /*#__PURE__*/React.createElement("div", {
    className: "payopt__label"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.6 12.7c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.7-1.3-.13-2.5.77-3.1.77-.62 0-1.65-.75-2.7-.73-1.4.02-2.67.8-3.38 2.05-1.44 2.5-.37 6.2 1.04 8.23.69 1 1.5 2.1 2.57 2.06 1.03-.04 1.42-.66 2.67-.66 1.24 0 1.6.66 2.69.64 1.11-.02 1.81-1 2.49-2 .78-1.15 1.1-2.26 1.12-2.32-.02-.01-2.15-.83-2.17-3.25zM15.5 6.3c.56-.7.95-1.62.84-2.55-.81.03-1.8.54-2.39 1.23-.52.6-.98 1.58-.86 2.48.9.07 1.83-.46 2.41-1.16z"
  })), "Apple Pay"), /*#__PURE__*/React.createElement("span", {
    className: "payopt__hint"
  }, "Fastest")), /*#__PURE__*/React.createElement("div", {
    className: "payopt" + (pay === "card" ? " payopt--on" : ""),
    onClick: () => setPay("card")
  }, /*#__PURE__*/React.createElement("div", {
    className: "payopt__radio"
  }), /*#__PURE__*/React.createElement("div", {
    className: "payopt__label"
  }, "Credit or debit card"))), pay === "card" && /*#__PURE__*/React.createElement("div", {
    className: "cardform"
  }, /*#__PURE__*/React.createElement("input", {
    className: "full",
    placeholder: "Card number",
    inputMode: "numeric",
    value: card.num,
    onChange: e => setCard({
      ...card,
      num: e.target.value
    })
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "MM / YY",
    inputMode: "numeric",
    value: card.exp,
    onChange: e => setCard({
      ...card,
      exp: e.target.value
    })
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "CVC",
    inputMode: "numeric",
    value: card.cvc,
    onChange: e => setCard({
      ...card,
      cvc: e.target.value
    })
  }), /*#__PURE__*/React.createElement("input", {
    className: "full",
    placeholder: "Billing ZIP",
    inputMode: "numeric",
    value: card.zip,
    onChange: e => setCard({
      ...card,
      zip: e.target.value
    })
  }))), /*#__PURE__*/React.createElement("div", {
    className: "card" + (applied ? " card--active" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "secttl"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.bag,
    w: 17
  }), " Have a coupon code?"), /*#__PURE__*/React.createElement("div", {
    className: "coupon"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Enter coupon code",
    value: coupon,
    onChange: e => setCoupon(e.target.value.toUpperCase())
  }), /*#__PURE__*/React.createElement("button", {
    disabled: !coupon.trim(),
    onClick: () => setApplied(coupon.trim())
  }, "Apply")), applied && /*#__PURE__*/React.createElement("div", {
    className: "coupon__ok"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.check,
    w: 15,
    sw: 2
  }), " \u201C", applied, "\u201D applied \xB7 10% off")), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement("b", null, "$", subtotal.toFixed(2))), planOff > 0 && /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, freq, " plan (", Math.round(FREQ_OFF[freq] * 100), "% off)"), /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--success-600)"
    }
  }, "\u2212$", planOff.toFixed(2))), discount > 0 && /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, "Coupon"), /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--success-600)"
    }
  }, "\u2212$", discount.toFixed(2))), /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, "Tip", tip.mode === "pct" ? ` (${tip.pct}%)` : ""), /*#__PURE__*/React.createElement("b", null, "$", tipAmt.toFixed(2))), /*#__PURE__*/React.createElement("div", {
    className: "totalrow totalrow--grand"
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", {
    className: "amt"
  }, "$", total.toFixed(2)))), pay === "apple" ? /*#__PURE__*/React.createElement("button", {
    className: "applebtn",
    disabled: !ready,
    style: !ready ? {
      opacity: .45
    } : null,
    onClick: () => ready && setApOpen(true)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.6 12.7c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.7-1.3-.13-2.5.77-3.1.77-.62 0-1.65-.75-2.7-.73-1.4.02-2.67.8-3.38 2.05-1.44 2.5-.37 6.2 1.04 8.23.69 1 1.5 2.1 2.57 2.06 1.03-.04 1.42-.66 2.67-.66 1.24 0 1.6.66 2.69.64 1.11-.02 1.81-1 2.49-2 .78-1.15 1.1-2.26 1.12-2.32-.02-.01-2.15-.83-2.17-3.25zM15.5 6.3c.56-.7.95-1.62.84-2.55-.81.03-1.8.54-2.39 1.23-.52.6-.98 1.58-.86 2.48.9.07 1.83-.46 2.41-1.16z"
  })), "Pay") : /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary btn--block",
    disabled: !ready,
    onClick: place
  }, "Place order \xB7 $", total.toFixed(2)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      fontSize: 11.5,
      color: "var(--ink-500)",
      marginTop: 12,
      lineHeight: 1.5
    }
  }, "You won't be charged until your visit is complete. We'll text you to confirm timing.")), apOpen && /*#__PURE__*/React.createElement(ApplePaySheet, {
    amount: total,
    building: profile.building,
    apt: profile.apt,
    onCancel: () => setApOpen(false),
    onDone: () => {
      setApOpen(false);
      place();
    }
  }));
}

/* ============================ Info sheet (task / package description) ============================ */
function InfoSheet({
  item,
  onClose
}) {
  const isPkg = !!item.tasks;
  const tasks = isPkg ? item.tasks.map(id => TASK_BY_ID[id]).filter(Boolean) : [];
  const dur = isPkg ? tasks.reduce((s, t) => s + t.dur, 0) : item.dur;
  return /*#__PURE__*/React.createElement("div", {
    className: "scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: "sheet__close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.close,
    w: 16
  })), /*#__PURE__*/React.createElement("div", {
    className: "sheet__icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: ICONS + item.icon,
    alt: ""
  })), /*#__PURE__*/React.createElement("h3", {
    className: "sheet__title"
  }, item.name), /*#__PURE__*/React.createElement("div", {
    className: "sheet__meta"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.clock,
    w: 14
  }), " About ", fmtDur(dur), isPkg ? " / visit" : ""), /*#__PURE__*/React.createElement("span", {
    className: "sheet__dot"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, isPkg ? `$${item.price} / visit` : `From $${item.price}`)), /*#__PURE__*/React.createElement("p", {
    className: "sheet__desc"
  }, item.desc), isPkg && /*#__PURE__*/React.createElement("div", {
    className: "infolist"
  }, /*#__PURE__*/React.createElement("div", {
    className: "infolist__ttl"
  }, "What's included"), tasks.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    className: "infolist__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "infolist__dot"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.check,
    w: 12,
    sw: 2.2
  })), /*#__PURE__*/React.createElement("span", {
    className: "infolist__name"
  }, t.name), /*#__PURE__*/React.createElement("span", {
    className: "infolist__dur"
  }, "~", fmtDur(t.dur)))), item.off && /*#__PURE__*/React.createElement("div", {
    className: "infolist__save"
  }, "Save up to 15% on recurring orders")), !isPkg && item.steps && /*#__PURE__*/React.createElement("div", {
    className: "infolist"
  }, /*#__PURE__*/React.createElement("div", {
    className: "infolist__ttl"
  }, "Options"), item.steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "infolist__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "infolist__name"
  }, s.label), /*#__PURE__*/React.createElement("span", {
    className: "infolist__dur"
  }, "~", fmtDur(s.dur)), /*#__PURE__*/React.createElement("span", {
    className: "infolist__price"
  }, "$", s.price)))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--ghost btn--block",
    onClick: onClose,
    style: {
      marginTop: 4
    }
  }, "Got it")));
}

/* ============================ Home (hero grid + floating bar) ============================ */
function Home({
  cart,
  dayIdx,
  setDayIdx,
  onTaskClick,
  onStep,
  onInfo,
  onTogglePkg,
  onOpenBooking,
  name = "there"
}) {
  const [mode, setMode] = useState("tasks");
  const itemBy = Object.fromEntries(cart.map(c => [c.taskId, c]));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pad page-anim",
    style: {
      paddingBottom: 222
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hi"
  }, "Hello, ", name, " ", /*#__PURE__*/React.createElement("span", {
    className: "wave"
  }, "\uD83D\uDC4B")), /*#__PURE__*/React.createElement("h1", null, "Book your clean.")), /*#__PURE__*/React.createElement(Segmented, {
    mode: mode,
    setMode: setMode
  }), mode === "tasks" ? /*#__PURE__*/React.createElement("div", {
    className: "grid"
  }, TASKS.map(t => /*#__PURE__*/React.createElement(TaskCard, {
    key: t.id,
    task: t,
    item: itemBy[t.id],
    onToggle: onTaskClick,
    onStep: onStep,
    onInfo: onInfo
  })), /*#__PURE__*/React.createElement(GhostCard, {
    icon: /*#__PURE__*/React.createElement(LineIcon, {
      d: P.plus,
      w: 26
    }),
    title: "Create Custom Task",
    sub: "Tell us what you need",
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(GhostCard, {
    icon: /*#__PURE__*/React.createElement(LineIcon, {
      d: P.phone,
      w: 24
    }),
    title: "Request a Call",
    sub: "Get a custom quote",
    onClick: () => {}
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "blurb"
  }, "Save time, skip the guesswork. Choose a pre-built bundle that fits your routine and let Zing handle the rest."), /*#__PURE__*/React.createElement("div", {
    className: "pgrid"
  }, PACKAGES.map(p => /*#__PURE__*/React.createElement(PackageCard, {
    key: p.id,
    pkg: p,
    inCart: p.tasks.every(id => itemBy[id]),
    onToggle: onTogglePkg,
    onInfo: onInfo
  })), /*#__PURE__*/React.createElement(GhostCard, {
    icon: /*#__PURE__*/React.createElement(LineIcon, {
      d: P.plus,
      w: 26
    }),
    title: "Build Custom Package",
    sub: "Choose your own tasks",
    onClick: () => setMode("tasks")
  }), /*#__PURE__*/React.createElement(GhostCard, {
    icon: /*#__PURE__*/React.createElement(LineIcon, {
      d: P.phone,
      w: 24
    }),
    title: "Request a Call",
    sub: "Get a custom quote",
    onClick: () => {}
  }))))), /*#__PURE__*/React.createElement(FloatingBar, {
    cart: cart,
    dayIdx: dayIdx,
    setDayIdx: setDayIdx,
    onOpen: onOpenBooking
  }));
}

/* ============================ Your bookings ============================ */
function bookingRow(b, done) {
  const d = b.date;
  return /*#__PURE__*/React.createElement("div", {
    key: b.id,
    className: "upcoming" + (done ? " upcoming--done" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "upcoming__date"
  }, /*#__PURE__*/React.createElement("b", null, d.getDate()), /*#__PURE__*/React.createElement("span", null, MONTHS[d.getMonth()])), /*#__PURE__*/React.createElement("div", {
    className: "upcoming__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "upcoming__t"
  }, b.title), /*#__PURE__*/React.createElement("div", {
    className: "upcoming__s"
  }, fmtDayLabel(d), " \xB7 ", fmtTime(b.start), " \u2013 ", fmtTime(b.start + b.dur))), /*#__PURE__*/React.createElement("span", {
    className: "vtag" + (done ? " vtag--done" : "")
  }, done ? "Done" : b.freq === "One-time" ? "Booked" : b.freq));
}
function Bookings({
  bookings,
  onBrowse
}) {
  const subs = bookings.filter(b => b.freq !== "One-time");
  const completed = [{
    id: "c1",
    title: "Vacuum & Floor Magic",
    date: addBusinessDays(startToday(), -6),
    start: 600,
    dur: 40,
    freq: "One-time"
  }, {
    id: "c2",
    title: "Zing Bathroom Clean (Full) + 1 more",
    date: addBusinessDays(startToday(), -11),
    start: 540,
    dur: 75,
    freq: "Weekly"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pad page-anim"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "page-title"
  }, "Your bookings"), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card__head"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.cal,
    w: 18
  }), " Upcoming visits"), bookings.length ? bookings.map(b => bookingRow(b, false)) : /*#__PURE__*/React.createElement("div", {
    className: "visitcard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "visitcard__ico"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.cal,
    w: 24
  })), /*#__PURE__*/React.createElement("p", null, "No upcoming visits."), /*#__PURE__*/React.createElement("a", {
    onClick: onBrowse
  }, "Book a clean \u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card__head"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.refresh,
    w: 18
  }), " Subscriptions"), subs.length ? subs.map(b => /*#__PURE__*/React.createElement("div", {
    key: b.id,
    className: "upcoming"
  }, /*#__PURE__*/React.createElement("div", {
    className: "upcoming__date"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.refresh,
    w: 22
  })), /*#__PURE__*/React.createElement("div", {
    className: "upcoming__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "upcoming__t"
  }, b.title), /*#__PURE__*/React.createElement("div", {
    className: "upcoming__s"
  }, b.freq, " \xB7 next ", fmtDayLabel(b.date), " ", fmtDateLabel(b.date))), /*#__PURE__*/React.createElement("span", {
    className: "vtag"
  }, b.freq))) : /*#__PURE__*/React.createElement("div", {
    className: "visitcard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "visitcard__ico"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.refresh,
    w: 24
  })), /*#__PURE__*/React.createElement("p", null, "No recurring services yet."), /*#__PURE__*/React.createElement("a", {
    onClick: onBrowse
  }, "Set up a routine \u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card__head"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.check,
    w: 18
  }), " Completed visits"), completed.map(b => bookingRow(b, true)))));
}

/* ============================ Confirmation ============================ */
function Confirm({
  booking,
  onDone,
  profile = {
    building: "Bezel Miami",
    apt: "1925"
  }
}) {
  const subtotal = booking.items.reduce((s, c) => s + c.price, 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "confirm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "confirm__badge"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.check,
    w: 38,
    sw: 1.8
  })), /*#__PURE__*/React.createElement("h2", null, "You're all set."), /*#__PURE__*/React.createElement("p", null, "Your Zing visit is reserved for ", fmtDayLabel(booking.date), ", ", fmtDateLabel(booking.date), " from ", fmtTime(booking.start), " to ", fmtTime(booking.start + booking.dur), ". We'll take it from here.")), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card__head"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.bag,
    w: 18
  }), " Your visit"), booking.items.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.uid,
    className: "citem"
  }, /*#__PURE__*/React.createElement("div", {
    className: "citem__icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: ICONS + c.icon,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "citem__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "citem__name"
  }, c.name), /*#__PURE__*/React.createElement("div", {
    className: "citem__meta"
  }, c.opt ? `${c.opt} · ` : "", "~", fmtDur(c.dur))), /*#__PURE__*/React.createElement("div", {
    className: "citem__price"
  }, "$", c.price)))), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, "When"), /*#__PURE__*/React.createElement("b", null, fmtDayLabel(booking.date), " ", fmtDateLabel(booking.date))), /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, "Time"), /*#__PURE__*/React.createElement("b", null, fmtTime(booking.start), " \u2013 ", fmtTime(booking.start + booking.dur))), /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, "Frequency"), /*#__PURE__*/React.createElement("b", null, booking.freq)), /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, "Apartment"), /*#__PURE__*/React.createElement("b", null, profile.building, " \xB7 ", profile.apt)), /*#__PURE__*/React.createElement("div", {
    className: "totalrow totalrow--grand"
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", {
    className: "amt"
  }, "$", subtotal))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary btn--block",
    onClick: onDone
  }, "Book another clean")));
}

/* ============================ Profile ============================ */
function Profile({
  profile = {
    name: "Whit",
    building: "Bezel Miami",
    apt: "1925",
    phone: "770 656 0139",
    pets: ""
  },
  onReplay
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pad page-anim"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "page-title"
  }, "Your profile"), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card__head"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.user,
    w: 18
  }), " Personal information"), /*#__PURE__*/React.createElement("label", {
    className: "plabel"
  }, "Full name"), /*#__PURE__*/React.createElement("input", {
    className: "pinput",
    defaultValue: profile.name
  }), /*#__PURE__*/React.createElement("label", {
    className: "plabel"
  }, "Phone number"), /*#__PURE__*/React.createElement("input", {
    className: "pinput",
    defaultValue: profile.phone
  }), /*#__PURE__*/React.createElement("label", {
    className: "plabel"
  }, "Apartment"), /*#__PURE__*/React.createElement("input", {
    className: "pinput",
    defaultValue: `${profile.building} · ${profile.apt}`
  }), /*#__PURE__*/React.createElement("label", {
    className: "plabel"
  }, "Pets info"), /*#__PURE__*/React.createElement("input", {
    className: "pinput",
    defaultValue: profile.pets,
    placeholder: "e.g. friendly dog, please keep the bedroom door closed"
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary btn--block",
    style: {
      marginTop: 4
    }
  }, "Save changes")), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card__head"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.cart,
    w: 18
  }), " Payment methods"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--ink-600)",
      margin: "0 0 14px"
    }
  }, "You have no saved cards."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--ghost btn--block"
  }, "Add new card")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--ghost btn--block",
    style: {
      marginBottom: 12
    },
    onClick: onReplay
  }, "Replay welcome tour"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--danger btn--block"
  }, "Log out")));
}

/* ============================ App ============================ */
function App() {
  // Demo boot via URL: ?preset=booking → three chores in cart, opens on Pick-a-Time
  const presetCart = useMemo(() => {
    let p;
    try {
      p = new URLSearchParams(location.search).get("preset");
    } catch (e) {
      p = null;
    }
    if (p !== "booking") return null;
    return ["dusting", "trash", "dishes"].map(id => TASK_BY_ID[id]).filter(Boolean).map(t => {
      const s = t.steps ? t.steps[0] : null;
      return {
        uid: t.id,
        taskId: t.id,
        name: t.name,
        price: s ? s.price : t.price,
        dur: s ? s.dur : t.dur,
        icon: t.icon,
        stepIdx: 0,
        opt: s ? s.label : null,
        note: ""
      };
    });
  }, []);
  const [tab, setTab] = useState("home");
  const [view, setView] = useState(presetCart ? "booking" : "app"); // "app" | "booking" | "checkout"
  const [dayIdx, setDayIdx] = useState(() => {
    if (!presetCart) return 0;
    const dur = presetCart.reduce((s, c) => s + c.dur, 0);
    const i = BUSINESS_DAYS.findIndex(d => firstFit(busyFor(d), dur) != null);
    return i >= 0 ? i : 0;
  });
  const [cart, setCart] = useState(presetCart || []);
  const [freq, setFreq] = useState("One-time");
  const [pending, setPending] = useState(null);
  const [confirmed, setConfirmed] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [infoItem, setInfoItem] = useState(null);
  const [onboarded, setOnboarded] = useState(() => {
    if (presetCart) return true;
    try {
      if (new URLSearchParams(location.search).has("onboarding")) return false;
    } catch (e) {}
    try {
      return localStorage.getItem("zing.onboarded") === "1";
    } catch (e) {
      return false;
    }
  });
  const [profile, setProfile] = useState({
    name: "Whit",
    building: "Bezel Miami",
    apt: "1925",
    phone: "770 656 0139",
    pets: ""
  });
  const finishOnboarding = d => {
    const first = (d.name || "").trim().split(/\s+/)[0] || "there";
    const BLD = {
      bezel: "Bezel Miami",
      muze: "Muze at Met",
      worldtower: "Miami World Tower",
      wynd27: "Wynd 27",
      wynd28: "Wynd 28",
      paraiso: "Paraíso Bayviews",
      forma: "Forma",
      hamilton: "The Hamilton"
    };
    setProfile({
      name: first,
      building: BLD[d.building] || "Bezel Miami",
      apt: (d.apt || "").trim() || "—",
      hometype: d.hometype || "",
      baths: d.baths || "",
      phone: d.phone || "",
      pets: (d.pets || "").trim()
    });
    try {
      localStorage.setItem("zing.onboarded", "1");
    } catch (e) {}
    setTab("home");
    setView("app");
    setOnboarded(true);
  };
  const replayTour = () => {
    setConfirmed(null);
    setView("app");
    setTab("home");
    setOnboarded(false);
  };
  const cartIds = new Set(cart.map(c => c.taskId));
  const mkItem = (t, stepIdx = 0) => {
    const s = t.steps ? t.steps[stepIdx] : null;
    return {
      uid: t.id,
      taskId: t.id,
      name: t.name,
      price: s ? s.price : t.price,
      dur: s ? s.dur : t.dur,
      icon: t.icon,
      stepIdx,
      opt: s ? s.label : null,
      note: ""
    };
  };
  const onTaskClick = task => {
    if (cartIds.has(task.id)) {
      setCart(c => c.filter(x => x.taskId !== task.id));
      return;
    }
    setCart(c => [...c, mkItem(task)]);
  };
  const stepItem = (task, delta) => setCart(c => c.map(x => {
    if (x.taskId !== task.id) return x;
    const i = Math.max(0, Math.min(task.steps.length - 1, x.stepIdx + delta));
    const s = task.steps[i];
    return {
      ...x,
      stepIdx: i,
      dur: s.dur,
      price: s.price,
      opt: s.label
    };
  }));
  const togglePkg = pkg => {
    const allIn = pkg.tasks.every(id => cartIds.has(id));
    if (allIn) setCart(c => c.filter(x => !pkg.tasks.includes(x.taskId)));else setCart(c => [...c, ...pkg.tasks.filter(id => !cartIds.has(id)).map(id => mkItem(TASK_BY_ID[id]))]);
  };
  const reserve = b => {
    setPending(b);
    setView("checkout");
  };
  const placeOrder = extra => {
    const booking = {
      id: "b" + Date.now(),
      ...pending,
      items: cart,
      freq,
      title: titleOf(cart),
      ...extra
    };
    setBookings(list => [booking, ...list]);
    setConfirmed(booking);
    setPending(null);
    setView("app");
  };
  const done = () => {
    setCart([]);
    setFreq("One-time");
    setConfirmed(null);
    setPending(null);
    setView("app");
    setTab("bookings");
  };
  const goTab = t => {
    setConfirmed(null);
    setView("app");
    setTab(t);
  };
  const chromeless = (view === "booking" || view === "checkout") && !confirmed;
  let body;
  if (confirmed) body = /*#__PURE__*/React.createElement(Confirm, {
    booking: confirmed,
    onDone: done,
    profile: profile
  });else if (view === "checkout") body = /*#__PURE__*/React.createElement(Checkout, {
    cart: cart,
    booking: pending,
    freq: freq,
    setFreq: setFreq,
    onBack: () => setView("booking"),
    onPlaceOrder: placeOrder,
    profile: profile
  });else if (view === "booking") body = /*#__PURE__*/React.createElement(BookingPage, {
    cart: cart,
    dayIdx: dayIdx,
    setDayIdx: setDayIdx,
    onBack: () => setView("app"),
    onReserve: reserve
  });else if (tab === "bookings") body = /*#__PURE__*/React.createElement(Bookings, {
    bookings: bookings,
    onBrowse: () => goTab("home")
  });else if (tab === "profile") body = /*#__PURE__*/React.createElement(Profile, {
    profile: profile,
    onReplay: replayTour
  });else body = /*#__PURE__*/React.createElement(Home, {
    cart: cart,
    dayIdx: dayIdx,
    setDayIdx: setDayIdx,
    onTaskClick: onTaskClick,
    onStep: stepItem,
    onInfo: setInfoItem,
    onTogglePkg: togglePkg,
    onOpenBooking: () => setView("booking"),
    name: profile.name
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "phone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "phone-screen"
  }, onboarded ? /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, !chromeless && /*#__PURE__*/React.createElement(AppBar, null), body, !chromeless && /*#__PURE__*/React.createElement(BottomNav, {
    tab: confirmed ? "bookings" : tab,
    setTab: goTab
  })) : /*#__PURE__*/React.createElement(Onboarding, {
    onDone: finishOnboarding
  }), infoItem && /*#__PURE__*/React.createElement(InfoSheet, {
    item: infoItem,
    onClose: () => setInfoItem(null)
  })), /*#__PURE__*/React.createElement("div", {
    className: "phone-notch"
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/resident-scheduling/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/resident-scheduling/components.jsx
try { (() => {
/* Zing Resident App · shared components (chrome, cards, timeline) */
const {
  useState,
  useRef
} = React;
const {
  ICONS,
  TASKS,
  TASK_BY_ID,
  PACKAGES,
  DAY_START,
  DAY_END,
  HOUR_PX,
  px,
  totalHeight,
  fmtDayLabel,
  fmtDateLabel,
  fmtTime,
  fmtTimeShort,
  fmtDur,
  openWindows,
  busyFor,
  firstFit,
  startToday,
  P,
  LineIcon
} = window;

/* ---------------- App bar (co-brand + Text us) ---------------- */
function AppBar() {
  return /*#__PURE__*/React.createElement("header", {
    className: "appbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cobrand"
  }, /*#__PURE__*/React.createElement("img", {
    className: "zing",
    src: "icons/zing-logo.svg",
    alt: "Zing"
  }), /*#__PURE__*/React.createElement("div", {
    className: "divider"
  }), /*#__PURE__*/React.createElement("img", {
    className: "bezel",
    src: "icons/bezel.webp",
    alt: "Bezel Miami"
  })), /*#__PURE__*/React.createElement("button", {
    className: "textus"
  }, "Text us"));
}

/* ---------------- Bottom navigation ---------------- */
function BottomNav({
  tab,
  setTab
}) {
  const items = [{
    id: "home",
    label: "Home",
    d: P.home
  }, {
    id: "bookings",
    label: "Your bookings",
    d: P.cal
  }, {
    id: "profile",
    label: "Profile",
    d: P.user
  }];
  return /*#__PURE__*/React.createElement("nav", {
    className: "bnav"
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    className: tab === it.id ? "on" : "",
    onClick: () => setTab(it.id)
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: it.d,
    w: 23
  }), /*#__PURE__*/React.createElement("span", null, it.label))));
}

/* ---------------- Compact swipeable date strip (arrows + chips) ---------------- */
function DateStrip({
  days,
  idx,
  setIdx
}) {
  const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const trackRef = useRef(null);
  React.useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const chip = el.children[idx];
    if (chip) el.scrollTo({
      left: chip.offsetLeft - el.clientWidth / 2 + chip.clientWidth / 2,
      behavior: "smooth"
    });
  }, [idx]);
  return /*#__PURE__*/React.createElement("div", {
    className: "datestrip"
  }, /*#__PURE__*/React.createElement("button", {
    className: "datestrip__arrow",
    onClick: () => setIdx(Math.max(0, idx - 1)),
    disabled: idx === 0,
    "aria-label": "Previous day"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.left,
    w: 18
  })), /*#__PURE__*/React.createElement("div", {
    className: "datestrip__track",
    ref: trackRef
  }, days.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "dchip" + (i === idx ? " dchip--on" : ""),
    onClick: () => setIdx(i)
  }, /*#__PURE__*/React.createElement("span", null, DOW[d.getDay()]), /*#__PURE__*/React.createElement("b", null, d.getDate())))), /*#__PURE__*/React.createElement("button", {
    className: "datestrip__arrow",
    onClick: () => setIdx(Math.min(days.length - 1, idx + 1)),
    disabled: idx === days.length - 1,
    "aria-label": "Next day"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.right,
    w: 18
  })));
}

/* ---------------- Tasks / Packages segmented ---------------- */
function Segmented({
  mode,
  setMode
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "seg",
    role: "tablist"
  }, /*#__PURE__*/React.createElement("button", {
    role: "tab",
    "aria-selected": mode === "tasks",
    onClick: () => setMode("tasks")
  }, /*#__PURE__*/React.createElement("span", {
    className: "gi"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.spark,
    w: 20
  })), " Tasks"), /*#__PURE__*/React.createElement("button", {
    role: "tab",
    "aria-selected": mode === "packages",
    onClick: () => setMode("packages")
  }, /*#__PURE__*/React.createElement("span", {
    className: "gi"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.bag,
    w: 19
  })), " Packages"));
}

/* ---------------- Task card (with on-card stepper for count-based tasks) ---------------- */
function TaskCard({
  task,
  item,
  onToggle,
  onStep,
  onInfo
}) {
  const inCart = !!item;
  const stepped = inCart && task.steps;
  const price = stepped ? task.steps[item.stepIdx].price : task.price;
  const dur = stepped ? task.steps[item.stepIdx].dur : task.dur;
  return /*#__PURE__*/React.createElement("div", {
    className: "tcard" + (inCart ? " in-cart" : ""),
    onClick: () => {
      if (inCart && task.steps) return;
      onToggle(task);
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "tcard__info",
    onClick: e => {
      e.stopPropagation();
      onInfo(task);
    },
    "aria-label": "What's included"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.info,
    w: 16
  })), inCart && /*#__PURE__*/React.createElement("span", {
    className: "tcard__check",
    onClick: e => {
      e.stopPropagation();
      onToggle(task);
    }
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: inCart && task.steps ? P.close : P.check,
    w: 14,
    sw: 2
  })), /*#__PURE__*/React.createElement("div", {
    className: "tcard__icon" + (/\.png$/.test(task.icon) ? " tcard__icon--photo" : "")
  }, /*#__PURE__*/React.createElement("img", {
    src: ICONS + task.icon,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "tcard__name"
  }, task.name), stepped ? /*#__PURE__*/React.createElement("div", {
    className: "qstep",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onStep(task, -1),
    disabled: item.stepIdx === 0,
    "aria-label": "Fewer"
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    className: "qstep__lbl"
  }, task.steps[item.stepIdx].label), /*#__PURE__*/React.createElement("button", {
    onClick: () => onStep(task, 1),
    disabled: item.stepIdx === task.steps.length - 1,
    "aria-label": "More"
  }, "+")) : null, /*#__PURE__*/React.createElement("div", {
    className: "tcard__dur"
  }, "~", fmtDur(dur)), /*#__PURE__*/React.createElement("div", {
    className: "tcard__price"
  }, "$", price));
}
function GhostCard({
  icon,
  title,
  sub,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tcard tcard--ghost",
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "tcard__plus"
  }, icon), /*#__PURE__*/React.createElement("div", {
    className: "tcard__name"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "tcard__sub"
  }, sub));
}

/* ---------------- Package card ---------------- */
function PackageCard({
  pkg,
  inCart,
  onToggle,
  onInfo
}) {
  const dur = pkg.tasks.reduce((s, id) => s + (TASK_BY_ID[id] ? TASK_BY_ID[id].dur : 0), 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "pcard" + (inCart ? " in-cart" : ""),
    onClick: () => onToggle(pkg)
  }, /*#__PURE__*/React.createElement("button", {
    className: "tcard__info",
    onClick: e => {
      e.stopPropagation();
      onInfo(pkg);
    },
    "aria-label": "What's included"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.info,
    w: 16
  })), inCart && /*#__PURE__*/React.createElement("span", {
    className: "tcard__check",
    onClick: e => {
      e.stopPropagation();
      onToggle(pkg);
    }
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.check,
    w: 14,
    sw: 2
  })), /*#__PURE__*/React.createElement("div", {
    className: "pcard__icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: ICONS + pkg.icon,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "pcard__name"
  }, pkg.name), /*#__PURE__*/React.createElement("div", {
    className: "pcard__dur"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.clock,
    w: 12
  }), " ~", fmtDur(dur)), /*#__PURE__*/React.createElement("div", {
    className: "pcard__starting"
  }, "Starting at"), /*#__PURE__*/React.createElement("div", {
    className: "pcard__price"
  }, "$", pkg.price, " ", /*#__PURE__*/React.createElement("small", null, "/ visit")), pkg.off && /*#__PURE__*/React.createElement("div", {
    className: "pcard__off"
  }, "Up to 15% off for Weekly,", /*#__PURE__*/React.createElement("br", null), "Bi-Weekly, Monthly orders"));
}

/* ---------------- Date navigator ---------------- */
function DateNav({
  date,
  onPrev,
  onNext,
  canPrev,
  canNext
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "datenav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "datenav__btn",
    onClick: onPrev,
    disabled: !canPrev,
    "aria-label": "Previous day"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.left,
    w: 20
  })), /*#__PURE__*/React.createElement("div", {
    className: "datenav__label"
  }, /*#__PURE__*/React.createElement("div", {
    className: "datenav__day"
  }, fmtDayLabel(date)), /*#__PURE__*/React.createElement("div", {
    className: "datenav__date"
  }, fmtDateLabel(date))), /*#__PURE__*/React.createElement("button", {
    className: "datenav__btn",
    onClick: onNext,
    disabled: !canNext,
    "aria-label": "Next day"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.right,
    w: 20
  })));
}

/* ---------------- Week strip (5 business days) ---------------- */
function WeekStrip({
  days,
  activeKey,
  onPick,
  freeness
}) {
  const DOW = ["S", "M", "T", "W", "T", "F", "S"];
  return /*#__PURE__*/React.createElement("div", {
    className: "weekstrip"
  }, days.map(d => {
    const k = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      className: "wchip" + (k === activeKey ? " wchip--on" : ""),
      onClick: () => onPick(d)
    }, /*#__PURE__*/React.createElement("span", null, DOW[d.getDay()]), /*#__PURE__*/React.createElement("b", null, d.getDate()), /*#__PURE__*/React.createElement("i", {
      className: "wchip__free"
    }));
  }));
}

/* ---------------- Day chips (rounded, availability dot left of label) ---------------- */
function DayChips({
  days,
  idx,
  onPick,
  dur,
  variant
}) {
  const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const todayKey = startToday().toDateString();
  return /*#__PURE__*/React.createElement("div", {
    className: "fdays" + (variant === "page" ? " fdays--page" : "")
  }, days.map((d, i) => {
    let cls = "fchip";
    if (dur > 0) cls += firstFit(busyFor(d), dur) != null ? " fchip--free" : " fchip--full";
    if (i === idx) cls += " fchip--on";
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: cls,
      onClick: e => {
        e.stopPropagation();
        onPick(i);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "fchip__top"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fchip__dot"
    }), /*#__PURE__*/React.createElement("span", {
      className: "fchip__dow"
    }, d.toDateString() === todayKey ? "Today" : DOW[d.getDay()])), /*#__PURE__*/React.createElement("b", {
      className: "fchip__num"
    }, d.getDate()));
  }));
}

/* ---------------- Timeline legend ---------------- */
function TimelineLegend({
  booking
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tlhint"
  }, /*#__PURE__*/React.createElement("i", null, /*#__PURE__*/React.createElement("span", {
    className: "sw sw--free"
  }), " Open"), /*#__PURE__*/React.createElement("i", null, /*#__PURE__*/React.createElement("span", {
    className: "sw sw--busy"
  }), " Booked"), booking && /*#__PURE__*/React.createElement("i", null, /*#__PURE__*/React.createElement("span", {
    className: "sw sw--sel"
  }), " Your visit"));
}

/* ---------------- The day timeline ---------------- */
function Timeline({
  busy,
  dur,
  selStart,
  onPick,
  onDragStart,
  showOpen
}) {
  const trackRef = useRef(null);
  const dragRef = useRef(null);
  const hours = [];
  for (let h = DAY_START / 60; h <= DAY_END / 60; h++) hours.push(h);
  const handleTap = e => {
    if (!onPick) return;
    const rect = trackRef.current.getBoundingClientRect();
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    const minutes = DAY_START + y / HOUR_PX * 60;
    onPick(minutes);
  };
  const selDown = e => {
    if (!onDragStart) return;
    e.stopPropagation();
    const rect = trackRef.current.getBoundingClientRect();
    const py = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    dragRef.current = {
      grab: py - px(selStart)
    };
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (_) {}
  };
  const selMove = e => {
    if (!dragRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const py = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    const startMin = DAY_START + (py - dragRef.current.grab) / HOUR_PX * 60;
    onDragStart(startMin);
  };
  const selUp = () => {
    dragRef.current = null;
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "timeline"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tl-gutter",
    style: {
      height: totalHeight
    }
  }, hours.map(h => /*#__PURE__*/React.createElement("div", {
    key: h,
    className: "hr",
    style: {
      top: px(h * 60)
    }
  }, fmtTimeShort(h * 60)))), /*#__PURE__*/React.createElement("div", {
    className: "tl-track",
    ref: trackRef,
    style: {
      height: totalHeight
    },
    onClick: handleTap
  }, hours.map(h => /*#__PURE__*/React.createElement("div", {
    key: "g" + h,
    className: "tl-grid",
    style: {
      top: px(h * 60)
    }
  })), hours.slice(0, -1).map(h => /*#__PURE__*/React.createElement("div", {
    key: "gh" + h,
    className: "tl-grid tl-grid--half",
    style: {
      top: px(h * 60 + 30)
    }
  })), showOpen && openWindows(busy).filter(w => w.end - w.start >= 30).map((w, i) => {
    const h = px(w.end) - px(w.start);
    const covered = selStart != null && dur != null && selStart < w.end && selStart + dur > w.start;
    return /*#__PURE__*/React.createElement("div", {
      key: "o" + i,
      className: "tl-open",
      style: {
        top: px(w.start),
        height: h - 3
      }
    }, h >= 26 && !covered && /*#__PURE__*/React.createElement("span", {
      className: "tl-open__lbl"
    }, "Open \xB7 ", fmtDur(w.end - w.start)));
  }), busy.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: "b" + i,
    className: "tl-busy",
    style: {
      top: px(b.start),
      height: px(b.end) - px(b.start) - 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-busy__lbl"
  }, b.label), px(b.end) - px(b.start) > 34 && /*#__PURE__*/React.createElement("span", {
    className: "tl-busy__sub"
  }, fmtTimeShort(b.start), "\u2013", fmtTimeShort(b.end), " \xB7 ", b.unit))), selStart != null && dur != null && /*#__PURE__*/React.createElement("div", {
    className: "tl-sel" + (onDragStart ? " tl-sel--drag" : ""),
    style: {
      top: px(selStart),
      height: px(selStart + dur) - px(selStart) - 3
    },
    onPointerDown: selDown,
    onPointerMove: selMove,
    onPointerUp: selUp,
    onPointerCancel: selUp
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-sel__grip tl-sel__grip--top"
  }), /*#__PURE__*/React.createElement("div", {
    className: "tl-sel__time"
  }, fmtTime(selStart), " \u2013 ", fmtTime(selStart + dur)), /*#__PURE__*/React.createElement("div", {
    className: "tl-sel__dur"
  }, onDragStart ? "Click or drag \u00b7 " : "", fmtDur(dur)), /*#__PURE__*/React.createElement("span", {
    className: "tl-sel__grip tl-sel__grip--bot"
  }))));
}
Object.assign(window, {
  AppBar,
  BottomNav,
  DateStrip,
  DayChips,
  Segmented,
  TaskCard,
  GhostCard,
  PackageCard,
  DateNav,
  WeekStrip,
  TimelineLegend,
  Timeline
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/resident-scheduling/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/resident-scheduling/data.jsx
try { (() => {
/* Zing Resident App · data + helpers + line icons
   Exposed on window for the other Babel scripts. */

const ICONS = "icons/";

/* ---- Service catalogue (matches the live Tasks menu) ---- */
const TASKS = [{
  id: "bathroom",
  name: "Zing Bathroom Clean (Full)",
  price: 35,
  dur: 45,
  icon: "bathroom.webp",
  desc: "Making bathrooms sparkle like a 5-star hotel. Toilet + sink scrub, shower & tub scrub, floors swept and mopped, mirrors wiped, surfaces disinfected and trash emptied.",
  opt: {
    label: "How many bathrooms?",
    noun: "bathrooms"
  },
  steps: [{
    label: "1 bathroom",
    dur: 45,
    price: 35
  }, {
    label: "2 bathrooms",
    dur: 75,
    price: 60
  }, {
    label: "3 bathrooms",
    dur: 105,
    price: 85
  }]
}, {
  id: "floor",
  name: "Vacuum & Floor Magic",
  price: 40,
  dur: 40,
  icon: "floor_magic.webp",
  desc: "A full-apartment vacuum and mop. Floors left spotless, streak-free and quietly fresh.",
  opt: {
    label: "Apartment size",
    noun: "home"
  },
  steps: [{
    label: "1 bedroom",
    dur: 40,
    price: 40
  }, {
    label: "2 bedroom",
    dur: 55,
    price: 55
  }, {
    label: "3 bedroom",
    dur: 70,
    price: 70
  }]
}, {
  id: "dusting",
  name: "Surface Dusting",
  price: 30,
  dur: 30,
  icon: "countertop.webp",
  desc: "Shelves, sills, tables and electronics gently dusted and wiped down throughout your space."
}, {
  id: "trash",
  name: "Trash & Recycling Run",
  price: 1,
  dur: 10,
  icon: "trash.webp",
  desc: "We gather, sort and take out the trash and recycling, and reline every bin."
}, {
  id: "balcony",
  name: "Balcony Refresh",
  price: 32,
  dur: 35,
  icon: "balcony.webp",
  desc: "Sweep, wipe and tidy your balcony — railings, floor and furniture left guest-ready."
}, {
  id: "windows",
  name: "Complete Window Cleaning",
  price: 12,
  dur: 30,
  icon: "window.webp",
  desc: "Interior glass and sills cleaned to a clear, streak-free shine.",
  opt: {
    label: "How many windows?",
    noun: "windows"
  },
  steps: [{
    label: "Up to 3 windows",
    dur: 30,
    price: 12
  }, {
    label: "4\u20136 windows",
    dur: 45,
    price: 20
  }, {
    label: "7\u201310 windows",
    dur: 60,
    price: 30
  }]
}, {
  id: "plants",
  name: "Watering Plants",
  price: 3,
  dur: 10,
  icon: "plants.webp",
  desc: "We water and check on your plants so everything stays lush while life is busy."
}, {
  id: "couch",
  name: "Couch & Throw Pillow Refresh",
  price: 3,
  dur: 15,
  icon: "couch.webp",
  desc: "Cushions fluffed, throws folded and the sofa reset to a calm, hotel-lobby tidy."
}, {
  id: "bed",
  name: "Bed Linen Refresh",
  price: 8,
  dur: 20,
  icon: "bed.webp",
  desc: "Fresh, crisp linens and a tightly-made bed — turned down like a suite."
}, {
  id: "dishes",
  name: "Dish Washing",
  price: 13,
  dur: 25,
  icon: "dishes.webp",
  desc: "Dishes washed, dried and put away, sink wiped down and left gleaming."
}, {
  id: "fridge",
  name: "Fridge Cleanout",
  price: 35,
  dur: 40,
  icon: "fridge.webp",
  desc: "Interior wiped, shelves cleaned and expired items cleared — fresh and organised."
}, {
  id: "oven",
  name: "Zing Oven Clean",
  price: 35,
  dur: 45,
  icon: "oven.webp",
  desc: "A deep degrease of the oven interior, racks and glass door, back to like-new."
}, {
  id: "spill",
  name: "Wine & Coffee Spill Treatment",
  price: 9,
  dur: 20,
  icon: "spill.webp",
  desc: "Fast, gentle treatment of fresh wine, coffee and food stains on fabric and floors."
}, {
  id: "laundry",
  name: "Zing Laundry Service",
  price: 15,
  dur: 50,
  icon: "laundry.webp",
  desc: "Wash and dry a load of laundry with premium detergent and fabric care.",
  opt: {
    label: "How many loads?",
    noun: "loads"
  },
  steps: [{
    label: "1 load",
    dur: 50,
    price: 15
  }, {
    label: "2 loads",
    dur: 85,
    price: 28
  }, {
    label: "3 loads",
    dur: 120,
    price: 40
  }]
}, {
  id: "folding",
  name: "Clothes Folding",
  price: 16,
  dur: 25,
  icon: "folding.webp",
  desc: "Clean laundry neatly folded and stacked, hotel-housekeeping style."
}, {
  id: "groceries",
  name: "Put Away Groceries",
  price: 3,
  dur: 15,
  icon: "groceries.webp",
  desc: "We unpack and organise your delivery into pantry and fridge so it's ready to use."
}, {
  id: "deodorize",
  name: "Deodorizing",
  price: 5,
  dur: 10,
  icon: "deodorize.webp",
  desc: "A light, natural deodorizing pass leaves your space smelling clean and calm."
}];
const TASK_BY_ID = Object.fromEntries(TASKS.map(t => [t.id, t]));

/* ---- Packages ---- */
const PACKAGES = [{
  id: "full",
  name: "Full Apartment Clean",
  price: 116,
  off: true,
  tasks: ["bathroom", "floor", "dusting", "trash", "bed"],
  icon: "couch.webp",
  desc: "Our signature top-to-bottom reset. We clean the bathroom, vacuum and mop every floor, dust all surfaces, take out the trash and refresh the bed linens — your whole apartment handled in one visit."
}, {
  id: "kitchen",
  name: "Kitchen Commander",
  price: 89,
  off: true,
  tasks: ["dishes", "oven", "fridge", "dusting"],
  icon: "oven.webp",
  desc: "A complete kitchen reset in one visit. We wash, dry and put away the dishes, deep-degrease the oven inside and out, wipe down and declutter the fridge, and dust and sanitize every counter and surface — the whole kitchen left spotless."
}, {
  id: "weekly",
  name: "Smart Weekly Care",
  price: 67,
  off: false,
  tasks: ["dusting", "floor", "trash"],
  icon: "bathroom.webp",
  desc: "A light, regular upkeep visit to keep things effortlessly tidy — surfaces dusted, floors vacuumed and mopped, and trash taken out. Best on a weekly rhythm."
}, {
  id: "biweekly",
  name: "Smart Bi-Weekly Care",
  price: 69,
  off: false,
  tasks: ["bathroom", "floor", "dusting"],
  icon: "window.webp",
  desc: "A slightly deeper every-other-week refresh — a full bathroom clean plus floors vacuumed and mopped and all surfaces dusted. The easy middle-ground routine."
}];

/* ---- Operating hours ---- */
const DAY_START = 8 * 60; // 8:00 AM
const DAY_END = 18 * 60; // 6:00 PM
const HOUR_PX = 64; // vertical px per hour
const SNAP = 15; // minute snap
const px = min => (min - DAY_START) / 60 * HOUR_PX;
const totalHeight = (DAY_END - DAY_START) / 60 * HOUR_PX;

/* ---- Date helpers (Mon–Fri only) ---- */
const DAYNAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function startToday() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  while (d.getDay() === 0 || d.getDay() === 6) d.setDate(d.getDate() + 1);
  return d;
}
function addBusinessDays(date, n) {
  const d = new Date(date);
  let step = n >= 0 ? 1 : -1;
  let left = Math.abs(n);
  while (left > 0) {
    d.setDate(d.getDate() + step);
    if (d.getDay() !== 0 && d.getDay() !== 6) left--;
  }
  return d;
}
const dateKey = d => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
const fmtDayLabel = d => `${DAYNAMES[d.getDay()]}`;
const fmtDateLabel = d => `${MONTHS[d.getMonth()]} ${d.getDate()}`;

/* ---- Time formatting ---- */
function fmtTime(min) {
  let h = Math.floor(min / 60),
    m = min % 60;
  const ap = h >= 12 ? "PM" : "AM";
  let hh = h % 12;
  if (hh === 0) hh = 12;
  return m === 0 ? `${hh}:00 ${ap}` : `${hh}:${String(m).padStart(2, "0")} ${ap}`;
}
function fmtTimeShort(min) {
  let h = Math.floor(min / 60),
    m = min % 60;
  const ap = h >= 12 ? "p" : "a";
  let hh = h % 12;
  if (hh === 0) hh = 12;
  return m === 0 ? `${hh}${ap}` : `${hh}:${String(m).padStart(2, "0")}${ap}`;
}
function fmtDur(min) {
  const h = Math.floor(min / 60),
    m = min % 60;
  if (h === 0) return `${m} min`;
  if (m === 0) return `${h} hr`;
  return `${h} hr ${m} min`;
}

/* ---- Deterministic "already booked" blocks per day ----
   Booking load rotates so the 5-day strip always shows variety:
   ~1 in 5 days is FULL (red the moment you add anything),
   ~1 in 5 is HEAVY (only short tasks fit), the rest are OPEN. */
function seeded(n) {
  let x = Math.sin(n) * 10000;
  return x - Math.floor(x);
}
const BUSY_LABELS = ["Full apartment clean", "Bathroom deep clean", "Kitchen reset", "Vacuum & floors", "Window cleaning", "Laundry service", "Fridge cleanout", "Dusting & tidy"];
const FLOOR_ORD = ["3rd", "5th", "7th", "9th", "11th", "12th", "14th", "17th", "19th", "21st", "24th", "28th"];
function dayLoad(d) {
  const ord = Math.floor(d.getTime() / 86400000);
  const m = (ord % 5 + 5) % 5;
  if (m === 0) return "full";
  if (m === 2) return "heavy";
  return "open";
}
function busyFor(d) {
  const seed = d.getFullYear() * 1000 + d.getMonth() * 40 + d.getDate();
  const load = dayLoad(d);
  const blocks = [];
  const lbl = i => BUSY_LABELS[Math.floor(seeded(seed * 13 + i) * BUSY_LABELS.length)];
  const unit = i => FLOOR_ORD[Math.floor(seeded(seed * 17 + i) * FLOOR_ORD.length)] + " floor";
  if (load === "full") {
    // fully booked — packed wall-to-wall, no usable gap (red for anything)
    let cursor = DAY_START;
    let i = 0;
    while (cursor < DAY_END) {
      const len = (3 + Math.floor(seeded(seed * 7 + i * 5) * 4)) * SNAP; // 45–90 min
      let end = cursor + len;
      if (end > DAY_END - 30) end = DAY_END; // clamp: no leftover window
      blocks.push({
        start: cursor,
        end,
        label: lbl(i),
        unit: unit(i)
      });
      if (end >= DAY_END) break;
      cursor = end + (seeded(seed * 3 + i) < .5 ? 0 : SNAP); // 0–15 min seam
      i++;
    }
  } else if (load === "heavy") {
    // packed, leaving only 30–45 min windows — short tasks fit, bundles don't
    let cursor = DAY_START + (seeded(seed * 2) < .5 ? 0 : SNAP);
    let i = 0;
    while (cursor < DAY_END - 30) {
      const len = (4 + Math.floor(seeded(seed * 7 + i * 5) * 3)) * SNAP; // 60–90 min
      const end = Math.min(cursor + len, DAY_END);
      blocks.push({
        start: cursor,
        end,
        label: lbl(i),
        unit: unit(i)
      });
      const gap = (2 + Math.floor(seeded(seed * 11 + i * 3) * 2)) * SNAP; // 30–45 min
      cursor = end + gap;
      i++;
    }
  } else {
    // open day — a handful of scattered bookings, lots of room
    const count = 2 + Math.floor(seeded(seed) * 3); // 2–4 blocks
    let cursor = DAY_START + Math.floor(seeded(seed * 2) * 6) * SNAP;
    for (let i = 0; i < count; i++) {
      const gap = (1 + Math.floor(seeded(seed * 7 + i * 3) * 5)) * SNAP; // 15–75 min gap
      const len = (2 + Math.floor(seeded(seed * 11 + i * 5) * 5)) * SNAP; // 30–90 min
      const start = cursor + gap;
      const end = start + len;
      if (end > DAY_END - 15) break;
      blocks.push({
        start,
        end,
        label: lbl(i),
        unit: unit(i)
      });
      cursor = end;
    }
  }
  return blocks;
}

/* ---- Open windows = gaps between busy blocks within hours ---- */
function openWindows(busy) {
  const sorted = [...busy].sort((a, b) => a.start - b.start);
  const wins = [];
  let cursor = DAY_START;
  for (const b of sorted) {
    if (b.start - cursor >= SNAP) wins.push({
      start: cursor,
      end: b.start
    });
    cursor = Math.max(cursor, b.end);
  }
  if (DAY_END - cursor >= SNAP) wins.push({
    start: cursor,
    end: DAY_END
  });
  return wins;
}

/* ---- Find first valid start for a duration on a day ---- */
function firstFit(busy, dur) {
  for (const w of openWindows(busy)) {
    if (w.end - w.start >= dur) return w.start;
  }
  return null;
}
/* ---- Is a [start, start+dur) block valid (in hours, no overlap)? ---- */
function fits(busy, start, dur) {
  if (start < DAY_START || start + dur > DAY_END) return false;
  return !busy.some(b => start < b.end && start + dur > b.start);
}
/* ---- Snap an arbitrary minute to a valid start near it ---- */
function snapValid(busy, raw, dur) {
  let start = Math.round((raw - dur / 2) / SNAP) * SNAP;
  start = Math.max(DAY_START, Math.min(start, DAY_END - dur));
  if (fits(busy, start, dur)) return start;
  // search outward for nearest fitting start
  for (let step = SNAP; step <= DAY_END - DAY_START; step += SNAP) {
    if (fits(busy, start - step, dur)) return start - step;
    if (fits(busy, start + step, dur)) return start + step;
  }
  return firstFit(busy, dur);
}
/* ---- Snap a START minute (anchored at top, for tap + drag) to nearest valid ---- */
function snapStart(busy, rawStart, dur) {
  let start = Math.round(rawStart / SNAP) * SNAP;
  start = Math.max(DAY_START, Math.min(start, DAY_END - dur));
  if (fits(busy, start, dur)) return start;
  for (let step = SNAP; step <= DAY_END - DAY_START; step += SNAP) {
    if (fits(busy, start - step, dur)) return start - step;
    if (fits(busy, start + step, dur)) return start + step;
  }
  return firstFit(busy, dur);
}

/* ---------------- Line icons (UI chrome) ---------------- */
const P = {
  home: "M3 11l9-8 9 8M5 9.5V20h14V9.5",
  cal: "M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zM4 9.5h16M8 3.5v3M16 3.5v3",
  user: "M4.5 20a7.5 7.5 0 0 1 15 0M12 11.5a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5",
  cart: "M3 4h2.2l1.9 11.2a1.5 1.5 0 0 0 1.48 1.25h8.32a1.5 1.5 0 0 0 1.47-1.2L20.5 7H6.2M9.5 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2M17 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2",
  left: "M15 5l-7 7 7 7",
  right: "M9 5l7 7-7 7",
  close: "M6 6l12 12M18 6L6 18",
  check: "M5 12.5l4.5 4.5L19 7",
  clock: "M12 7.5v5l3 2M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18",
  plus: "M12 5v14M5 12h14",
  phone: "M6.5 3.5h3l1.2 4-2 1.4a12 12 0 0 0 4.9 4.9l1.4-2 4 1.2v3a1.6 1.6 0 0 1-1.7 1.6A15.5 15.5 0 0 1 4.9 5.2 1.6 1.6 0 0 1 6.5 3.5",
  trash: "M5 7h14M9 7V5h6v2M7 7l.8 12.2A1 1 0 0 0 8.8 20h6.4a1 1 0 0 0 1-0.8L17 7M10 11v5M14 11v5",
  refresh: "M4 11a8 8 0 0 1 13.5-4.5L20 9M20 4v5h-5M20 13a8 8 0 0 1-13.5 4.5L4 15M4 20v-5h5",
  spark: "M12 3l1.6 5L19 9.6 13.6 11 12 16l-1.6-5L5 9.6 10.4 8z",
  edit: "M4 20h4l10-10-4-4L4 16zM14 6l4 4",
  bag: "M6 8h12l-1 12H7zM9 8V6a3 3 0 0 1 6 0v2",
  info: "M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18M12 11v5M12 7.5h.01"
};
function LineIcon({
  d,
  w = 22,
  sw = 1.6,
  style
}) {
  return React.createElement("svg", {
    width: w,
    height: w,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style
  }, React.createElement("path", {
    d
  }));
}
Object.assign(window, {
  ICONS,
  TASKS,
  TASK_BY_ID,
  PACKAGES,
  DAY_START,
  DAY_END,
  HOUR_PX,
  SNAP,
  px,
  totalHeight,
  startToday,
  addBusinessDays,
  dateKey,
  fmtDayLabel,
  fmtDateLabel,
  fmtTime,
  fmtTimeShort,
  fmtDur,
  busyFor,
  openWindows,
  firstFit,
  fits,
  snapValid,
  snapStart,
  P,
  LineIcon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/resident-scheduling/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/resident-scheduling/onboarding.jsx
try { (() => {
/* Zing Resident App · Onboarding
   A calm, motion-forward welcome: 4 story screens that explain Zing (dedicated
   in-building cleaner, à-la-carte tasks, live calendar), then a 5-step setup
   (building, name, apartment, phone, pets) and a finish screen.
   Exposes <Onboarding onDone={profile => …} /> on window. */
const {
  useState,
  useEffect,
  useRef
} = React;
const {
  ICONS,
  P,
  LineIcon
} = window;
const STORY = [{
  key: "welcome",
  photo: "img/lobby-cart.png",
  photoPos: "60% center",
  eyebrow: "Welcome to Zing",
  title: "An extra set of hands, right down the hall.",
  body: "The dedicated cleaning service built into your building — book anything from a sink of dishes to a full apartment reset.",
  cta: "Get started"
}, {
  key: "cleaner",
  photo: "img/finished-satisfied.png",
  eyebrow: "Your building's team",
  title: "A Zing cleaner who already knows your building.",
  body: "A dedicated housekeeping team works right here — no strangers from across town, no long waits. Just help that's already close by.",
  cta: "Continue"
}, {
  key: "tasks",
  illus: "icons",
  eyebrow: "À la carte",
  title: "Book exactly what you need.",
  body: "Pick a single task or bundle a few into one visit. You only pay for what you book — nothing you don't.",
  cta: "Continue"
}, {
  key: "calendar",
  illus: "cal",
  eyebrow: "Live availability",
  title: "See what's open. Slide in your time.",
  body: "We work your building Monday to Friday, 8 to 6. Watch open slots update as you go and reserve the time that fits.",
  cta: "Let's set you up"
}];
const BUILDINGS = [{
  id: "bezel",
  name: "Bezel Miami",
  addr: "Edgewater, Miami",
  img: "img/bld/bezel.jpg"
}, {
  id: "muze",
  name: "Muze at Met",
  addr: "Downtown Miami",
  img: "img/bld/muze.jpg"
}, {
  id: "worldtower",
  name: "Miami World Tower",
  addr: "Miami Worldcenter",
  img: "img/bld/worldtower.jpg"
}, {
  id: "wynd27",
  name: "Wynd 27",
  addr: "Wynwood, Miami",
  img: "img/bld/wynd27.jpg"
}, {
  id: "wynd28",
  name: "Wynd 28",
  addr: "Wynwood, Miami",
  img: "img/bld/wynd28.jpg"
}, {
  id: "paraiso",
  name: "Paraíso Bayviews",
  addr: "Edgewater, Miami",
  img: "img/bld/paraiso.jpg"
}, {
  id: "forma",
  name: "Forma",
  addr: "Miami",
  img: "img/bld/forma.jpg"
}, {
  id: "hamilton",
  name: "The Hamilton",
  addr: "Edgewater, Miami",
  img: "img/bld/hamilton.jpg"
}];
const OB_ICONS = ["dishes.webp", "laundry.webp", "trash.webp", "bed.webp", "oven.webp", "window.webp", "plants.webp", "couch.webp", "folding.webp"];
const fmtPhone = v => {
  const d = v.replace(/\D/g, "").slice(0, 10);
  const a = d.slice(0, 3),
    b = d.slice(3, 6),
    c = d.slice(6, 10);
  if (d.length > 6) return `(${a}) ${b}-${c}`;
  if (d.length > 3) return `(${a}) ${b}`;
  if (d.length > 0) return `(${a}`;
  return "";
};
function Dots({
  n,
  i,
  over
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ob-dots" + (over ? " ob-dots--over" : "")
  }, Array.from({
    length: n
  }).map((_, k) => /*#__PURE__*/React.createElement("span", {
    key: k,
    className: "ob-dot" + (k === i ? " ob-dot--on" : "")
  })));
}
function IconGrid() {
  return /*#__PURE__*/React.createElement("div", {
    className: "ob-icons"
  }, OB_ICONS.map((ic, idx) => /*#__PURE__*/React.createElement("div", {
    key: ic,
    className: "ob-ico",
    style: {
      animationDelay: idx * 0.055 + 0.1 + "s"
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "ob-ico__img",
    src: ICONS + ic,
    alt: "",
    style: {
      animationDelay: idx * 0.09 + 0.7 + "s"
    }
  }))));
}
function CalPreview() {
  const hours = [8, 9, 10, 11, 12, 13];
  return /*#__PURE__*/React.createElement("div", {
    className: "ob-cal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ob-cal__hd"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ob-cal__day"
  }, "Tuesday"), /*#__PURE__*/React.createElement("div", {
    className: "ob-cal__chips"
  }, ["M", "T", "W", "T", "F"].map((d, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "ob-cal__chip" + (i === 1 ? " ob-cal__chip--on" : "")
  }, d)))), /*#__PURE__*/React.createElement("div", {
    className: "ob-cal__grid"
  }, hours.map(h => /*#__PURE__*/React.createElement(React.Fragment, {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    className: "ob-cal__row",
    style: {
      top: (h - 8) * 32
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "ob-cal__hr",
    style: {
      top: (h - 8) * 32
    }
  }, h > 12 ? h - 12 : h, h >= 12 ? "p" : "a"))), /*#__PURE__*/React.createElement("div", {
    className: "ob-cal__busy",
    style: {
      top: 8,
      height: 22,
      animationDelay: ".15s"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ob-cal__lbl"
  }, "Bathroom clean")), /*#__PURE__*/React.createElement("div", {
    className: "ob-cal__open",
    style: {
      top: 34,
      height: 70,
      animationDelay: ".25s"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "ob-cal__busy",
    style: {
      top: 108,
      height: 40,
      animationDelay: ".2s"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ob-cal__lbl"
  }, "Vacuum & floors")), /*#__PURE__*/React.createElement("div", {
    className: "ob-cal__sel",
    style: {
      top: 64,
      height: 32
    }
  }, /*#__PURE__*/React.createElement("b", null, "10:00 AM"), /*#__PURE__*/React.createElement("span", null, "Your visit \xB7 1 hr"))));
}
function Onboarding({
  onDone
}) {
  const SETUP = ["building", "name", "apt", "hometype", "baths", "phone", "verify", "pets"];
  const STEPS = ["welcome", "cleaner", "tasks", "calendar", ...SETUP, "done"];
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState("f");
  const [data, setData] = useState({
    building: "bezel",
    name: "Whit",
    apt: "1925",
    hometype: "1 Bedroom",
    baths: "1 Bathroom",
    phone: "(305) 555-1212",
    code: "248913",
    pets: ""
  });
  const inputRef = useRef(null);
  const key = STEPS[step];
  const isStory = step <= 3;
  const isSetup = SETUP.includes(key);
  const q = isSetup ? key : null;
  const setupIdx = SETUP.indexOf(key);
  const go = d => {
    setDir(d > 0 ? "f" : "b");
    setStep(s => Math.max(0, Math.min(STEPS.length - 1, s + d)));
  };
  const jumpTo = i => {
    setDir(i > step ? "f" : "b");
    setStep(i);
  };
  const set = (k, v) => setData(d => ({
    ...d,
    [k]: v
  }));
  useEffect(() => {
    if (["name", "apt", "phone", "pets"].includes(key)) {
      const t = setTimeout(() => inputRef.current && inputRef.current.focus(), 380);
      return () => clearTimeout(t);
    }
  }, [key]);
  const valid = q === "name" ? !!data.name.trim() : q === "apt" ? !!data.apt.trim() : q === "hometype" ? !!data.hometype : q === "baths" ? !!data.baths : q === "phone" ? data.phone.replace(/\D/g, "").length >= 10 : q === "verify" ? (data.code || "").length === 6 : true;
  const onEnter = e => {
    if (e.key === "Enter" && valid) go(1);
  };
  const bld = BUILDINGS.find(b => b.id === data.building) || BUILDINGS[0];
  const first = data.name.trim().split(/\s+/)[0];
  let inner;
  if (isStory) {
    const s = STORY[step];
    const foot = over => /*#__PURE__*/React.createElement("div", {
      className: "ob-foot" + (over ? " ob-foot--over" : "") + " ob-anim",
      style: {
        animationDelay: ".28s"
      }
    }, /*#__PURE__*/React.createElement(Dots, {
      n: STORY.length,
      i: step,
      over: over
    }), /*#__PURE__*/React.createElement("button", {
      className: "btn btn--primary btn--block",
      onClick: () => go(1)
    }, s.cta));
    if (s.photo) {
      inner = /*#__PURE__*/React.createElement("div", {
        className: "ob-media--full"
      }, /*#__PURE__*/React.createElement("img", {
        className: "ob-photo",
        src: s.photo,
        alt: "",
        style: {
          objectPosition: s.photoPos || "center"
        }
      }), /*#__PURE__*/React.createElement("div", {
        className: "ob-photo-shade"
      }), /*#__PURE__*/React.createElement("img", {
        className: "ob-logo",
        src: "img/zing-logo-cream.svg",
        alt: "Zing"
      }), /*#__PURE__*/React.createElement("button", {
        className: "ob-skip",
        onClick: () => jumpTo(4)
      }, "Skip"), /*#__PURE__*/React.createElement("div", {
        className: "ob-over"
      }, /*#__PURE__*/React.createElement("div", {
        className: "ob-copy--over"
      }, /*#__PURE__*/React.createElement("div", {
        className: "ob-eyebrow ob-anim",
        style: {
          animationDelay: ".05s"
        }
      }, s.eyebrow), /*#__PURE__*/React.createElement("h1", {
        className: "ob-title ob-anim",
        style: {
          animationDelay: ".12s"
        }
      }, s.title), /*#__PURE__*/React.createElement("p", {
        className: "ob-body ob-anim",
        style: {
          animationDelay: ".2s"
        }
      }, s.body)), foot(true)));
    } else {
      inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
        className: "ob-logo ob-logo--dark",
        src: "icons/zing-logo.svg",
        alt: "Zing"
      }), /*#__PURE__*/React.createElement("button", {
        className: "ob-skip ob-skip--dark",
        onClick: () => jumpTo(4)
      }, "Skip"), /*#__PURE__*/React.createElement("div", {
        className: "ob-illus"
      }, s.illus === "icons" ? /*#__PURE__*/React.createElement(IconGrid, null) : /*#__PURE__*/React.createElement(CalPreview, null)), /*#__PURE__*/React.createElement("div", {
        className: "ob-copy"
      }, /*#__PURE__*/React.createElement("div", {
        className: "ob-eyebrow ob-anim",
        style: {
          animationDelay: ".05s"
        }
      }, s.eyebrow), /*#__PURE__*/React.createElement("h1", {
        className: "ob-title ob-anim",
        style: {
          animationDelay: ".12s"
        }
      }, s.title), /*#__PURE__*/React.createElement("p", {
        className: "ob-body ob-anim",
        style: {
          animationDelay: ".2s"
        }
      }, s.body)), foot(false));
    }
  } else if (isSetup) {
    let qbody;
    if (q === "building") {
      qbody = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
        className: "ob-qtitle ob-anim",
        style: {
          animationDelay: ".05s"
        }
      }, "Where do you call home?"), /*#__PURE__*/React.createElement("p", {
        className: "ob-qsub ob-anim",
        style: {
          animationDelay: ".12s"
        }
      }, "Zing lives inside your building. Choose yours to get started."), /*#__PURE__*/React.createElement("div", {
        className: "ob-blds ob-anim",
        style: {
          animationDelay: ".18s"
        }
      }, BUILDINGS.map(b => /*#__PURE__*/React.createElement("button", {
        key: b.id,
        className: "ob-bld" + (data.building === b.id ? " ob-bld--on" : ""),
        onClick: () => set("building", b.id)
      }, /*#__PURE__*/React.createElement("img", {
        className: "ob-bld__img",
        src: b.img,
        alt: ""
      }), /*#__PURE__*/React.createElement("div", {
        className: "ob-bld__main"
      }, /*#__PURE__*/React.createElement("div", {
        className: "ob-bld__name"
      }, b.name), /*#__PURE__*/React.createElement("div", {
        className: "ob-bld__addr"
      }, b.addr)), /*#__PURE__*/React.createElement("span", {
        className: "ob-bld__tick"
      }, data.building === b.id && /*#__PURE__*/React.createElement(LineIcon, {
        d: P.check,
        w: 13,
        sw: 2.4
      }))))));
    } else if (q === "name") {
      qbody = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
        className: "ob-qtitle ob-anim",
        style: {
          animationDelay: ".05s"
        }
      }, "What should we call you?"), /*#__PURE__*/React.createElement("p", {
        className: "ob-qsub ob-anim",
        style: {
          animationDelay: ".12s"
        }
      }, "So your Zing cleaner can greet you by name."), /*#__PURE__*/React.createElement("input", {
        ref: inputRef,
        className: "ob-input ob-anim",
        style: {
          animationDelay: ".18s"
        },
        type: "text",
        placeholder: "Your name",
        value: data.name,
        onChange: e => set("name", e.target.value),
        onKeyDown: onEnter
      }));
    } else if (q === "apt") {
      qbody = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
        className: "ob-qtitle ob-anim",
        style: {
          animationDelay: ".05s"
        }
      }, "Which apartment are we cleaning?"), /*#__PURE__*/React.createElement("p", {
        className: "ob-qsub ob-anim",
        style: {
          animationDelay: ".12s"
        }
      }, "We'll only ever visit this unit at ", bld.name, "."), /*#__PURE__*/React.createElement("input", {
        ref: inputRef,
        className: "ob-input ob-anim",
        style: {
          animationDelay: ".18s"
        },
        type: "text",
        inputMode: "numeric",
        placeholder: "e.g. 1925",
        value: data.apt,
        onChange: e => set("apt", e.target.value),
        onKeyDown: onEnter
      }));
    } else if (q === "hometype") {
      const opts = ["Studio", "1 Bedroom", "2 Bedrooms", "3+ Bedrooms"];
      qbody = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
        className: "ob-qtitle ob-anim",
        style: {
          animationDelay: ".05s"
        }
      }, "What type of home do you have?"), /*#__PURE__*/React.createElement("p", {
        className: "ob-qsub ob-anim",
        style: {
          animationDelay: ".12s"
        }
      }, "This helps us give you accurate pricing for each clean."), /*#__PURE__*/React.createElement("div", {
        className: "ob-opts ob-anim",
        style: {
          animationDelay: ".18s"
        }
      }, opts.map(o => /*#__PURE__*/React.createElement("button", {
        key: o,
        className: "ob-opt" + (data.hometype === o ? " ob-opt--on" : ""),
        onClick: () => set("hometype", o)
      }, o))));
    } else if (q === "baths") {
      const opts = ["1 Bathroom", "1.5 Bathrooms", "2 Bathrooms", "3 Bathrooms"];
      qbody = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
        className: "ob-qtitle ob-anim",
        style: {
          animationDelay: ".05s"
        }
      }, "How many bathrooms does your place have?"), /*#__PURE__*/React.createElement("p", {
        className: "ob-qsub ob-anim",
        style: {
          animationDelay: ".12s"
        }
      }, "This helps us give you accurate pricing for each clean."), /*#__PURE__*/React.createElement("div", {
        className: "ob-opts ob-anim",
        style: {
          animationDelay: ".18s"
        }
      }, opts.map(o => /*#__PURE__*/React.createElement("button", {
        key: o,
        className: "ob-opt" + (data.baths === o ? " ob-opt--on" : ""),
        onClick: () => set("baths", o)
      }, o))));
    } else if (q === "phone") {
      qbody = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
        className: "ob-qtitle ob-anim",
        style: {
          animationDelay: ".05s"
        }
      }, "Where should we text you?"), /*#__PURE__*/React.createElement("p", {
        className: "ob-qsub ob-anim",
        style: {
          animationDelay: ".12s"
        }
      }, "For visit confirmations and arrival updates \u2014 nothing else."), /*#__PURE__*/React.createElement("input", {
        ref: inputRef,
        className: "ob-input ob-anim",
        style: {
          animationDelay: ".18s"
        },
        type: "tel",
        inputMode: "tel",
        placeholder: "(305) 000-0000",
        value: data.phone,
        onChange: e => set("phone", fmtPhone(e.target.value)),
        onKeyDown: onEnter
      }));
    } else if (q === "verify") {
      const digits = (data.code || "").split("");
      qbody = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
        className: "ob-qtitle ob-anim",
        style: {
          animationDelay: ".05s"
        }
      }, "Verify your number."), /*#__PURE__*/React.createElement("p", {
        className: "ob-qsub ob-anim",
        style: {
          animationDelay: ".12s"
        }
      }, "We texted a 6-digit code to ", data.phone || "your phone", "."), /*#__PURE__*/React.createElement("div", {
        className: "ob-code ob-anim",
        style: {
          animationDelay: ".18s"
        }
      }, [0, 1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "ob-code__box" + (digits[i] ? " ob-code__box--on" : "")
      }, digits[i] || ""))), /*#__PURE__*/React.createElement("div", {
        className: "ob-code__hint ob-anim",
        style: {
          animationDelay: ".24s"
        }
      }, /*#__PURE__*/React.createElement(LineIcon, {
        d: P.check,
        w: 14,
        sw: 2.2
      }), " Autofilled from Messages"));
    } else if (q === "pets") {
      qbody = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
        className: "ob-qtitle ob-anim",
        style: {
          animationDelay: ".05s"
        }
      }, "Anyone furry we should know about?"), /*#__PURE__*/React.createElement("p", {
        className: "ob-qsub ob-anim",
        style: {
          animationDelay: ".12s"
        }
      }, "Helps your cleaner arrive prepared. Totally optional."), /*#__PURE__*/React.createElement("input", {
        ref: inputRef,
        className: "ob-input ob-anim",
        style: {
          animationDelay: ".18s"
        },
        type: "text",
        placeholder: "e.g. friendly dog, shy cat\u2026",
        value: data.pets,
        onChange: e => set("pets", e.target.value),
        onKeyDown: onEnter
      }));
    }
    inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "ob-setup"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ob-setup__top"
    }, /*#__PURE__*/React.createElement("button", {
      className: "ob-back",
      onClick: () => go(-1),
      "aria-label": "Back"
    }, /*#__PURE__*/React.createElement(LineIcon, {
      d: P.left,
      w: 20
    })), /*#__PURE__*/React.createElement("div", {
      className: "ob-prog"
    }, SETUP.map((_, k) => /*#__PURE__*/React.createElement("span", {
      key: k,
      className: "ob-prog__seg" + (k <= setupIdx ? " ob-prog__seg--on" : "")
    }, /*#__PURE__*/React.createElement("i", null)))), /*#__PURE__*/React.createElement("span", {
      className: "ob-stepn"
    }, setupIdx + 1, "/", SETUP.length)), /*#__PURE__*/React.createElement("div", {
      className: "ob-setup__q"
    }, qbody)), /*#__PURE__*/React.createElement("div", {
      className: "ob-foot"
    }, q === "pets" && /*#__PURE__*/React.createElement("button", {
      className: "btn btn--ghost btn--block",
      onClick: () => {
        set("pets", "");
        go(1);
      }
    }, "I don't have any pets"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn--primary btn--block",
      disabled: !valid,
      onClick: () => go(1)
    }, q === "pets" ? "Finish" : "Continue")));
  } else {
    inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "ob-done"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ob-badge-wrap"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ob-done__ring"
    }), /*#__PURE__*/React.createElement("div", {
      className: "ob-done__badge"
    }, /*#__PURE__*/React.createElement(LineIcon, {
      d: P.check,
      w: 42,
      sw: 1.8
    }))), /*#__PURE__*/React.createElement("h1", {
      className: "ob-title",
      style: {
        marginTop: 22
      }
    }, "You're all set", first ? `, ${first}` : "", "."), /*#__PURE__*/React.createElement("p", {
      className: "ob-body",
      style: {
        maxWidth: 288
      }
    }, "Your Zing cleaner at ", bld.name, " is ready when you are. Let's book your first visit.")), /*#__PURE__*/React.createElement("div", {
      className: "ob-foot"
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn--primary btn--block",
      onClick: () => onDone(data)
    }, "Book your first clean")));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "ob"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ob__stage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ob-screen",
    "data-dir": dir,
    key: key
  }, inner)));
}
Object.assign(window, {
  Onboarding
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/resident-scheduling/onboarding.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ServiceRow = __ds_scope.ServiceRow;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
