# Ownership

## Current owners

- Repository, brand, and site: @willyd61 (William Lipford)
- Shop: Angels Auto Repair, 306 N Lake Park Blvd, Carolina Beach, NC
- Security contact: the repository owner, via GitHub private vulnerability reports

## What ownership means here

- Brand changes go through the plate in `public/brand/` and an ADR if the
  mark itself changes.
- Shop facts (phone, hours, address, public URL) change in `src/data/site.ts`
  and in `branding/build_brand.py` together.
- GoC baselines in this nav stay unless a pull request says which control is
  being dropped and why.

## Decision records

Use `templates/adr.md`. Store accepted decisions in `docs/decisions/`.
The first one is the final logo plate.
