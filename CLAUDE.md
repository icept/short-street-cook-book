# Short Street Cook Book

A household recipe collection for the Short Street kitchen, Perth, WA.
British spelling throughout. All quantities in metric. The voice is personal —
write as you would explain a dish to a friend.

## Repository layout

```
recipes/     one file per recipe, named NN-slug.md
produce/     one file per home-grown or foraged ingredient, named NN-slug.md
```

## Recipe file format

Each recipe uses a YAML front matter block followed by markdown sections.

```markdown
---
title: Recipe Name
serves: 4
time: 30 minutes
---

A line or two about where the recipe came from or why it belongs here.

## Ingredients

- item, quantity

## Method

1. Step one.
2. Step two.

## Flavour          ← optional
## Why it works     ← optional
## Substitutions    ← optional
```

## Optional sections

Three sections may appear after `## Method`. They are entirely optional —
existing recipes without them are valid, and new recipes should only include
them when they add something useful.

### ## Flavour

The flavour profile in plain English: what dominates, what balances it,
and what to expect on the palate. Useful for dishes where the flavour
balance is the point — a bright acidic dressing, a deeply savoury braise,
a dish that plays bitter against sweet.

### ## Why it works

The technique or food-science note that makes the dish succeed. Keep it
practical — not a lecture, but the one thing a cook should understand before
they start. Useful for dishes with a non-obvious technique, a surprising
ingredient interaction, or a step that beginners often get wrong.

### ## Substitutions

A short list of swaps and what each change does to the dish. Write each entry
as `**Ingredient** — what to use and what shifts as a result.` Useful for
dishes with hard-to-find ingredients or obvious variations worth exploring.

## Produce file format

See `produce/` for the house-produce section. Each file documents an ingredient
grown, foraged, or regularly sourced locally.

```markdown
---
name: Ingredient Name
type: Home-grown        # Home-grown | Foraged | Bought
varieties: variety one, variety two
---

Short personal intro.

## In season

Perth / WA seasonality.

## Pairs with

- key pantry partners and companion ingredients

## Where to get it locally

- where to source it and its partners around Perth

## Notes

Preserving, storage, variety notes.
```

## Keeping the index up to date

`README.md` is the cookbook's contents page. Whenever you add, rename, or
remove a file in `recipes/` or `produce/`, update README.md in the same
commit:

- Add a link under the correct category heading in **Recipes**, using the
  recipe's `title` front matter field as the link text.
- Add a link under **House Produce**, using the `name` front matter field.
- If a new recipe doesn't fit an existing category, add a new `###` heading
  for it.

Never let the index drift out of sync with the files on disk.

## Style guide

- British spelling: *flavour*, *colour*, *courgette*, *aubergine*, *coriander*
  (not cilantro), *grill* (not broil).
- Metric only: grams, millilitres, centimetres, °C.
- Warm, direct voice. Write "tip in the onions" not "add the onions to the pan".
- Oven temperatures are fan-forced unless noted.
- Quantities serve 4 unless the front matter says otherwise.
