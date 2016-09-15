/**
 * return an id that is unique within game system
 *
 */
export const FIRST_ENTITY_ID = 0;

let id = FIRST_ENTITY_ID;

export function makeId() {
  return id++;
}
