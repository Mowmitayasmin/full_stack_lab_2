import { roles } from "../data/organizationdata.json";
import type { Organizationdata } from "../hooks/useEntryForm";

export function getRoles() {
  return roles;
}

export async function createNewRole(role: Organizationdata) {
  const normalizedRole = {
    ...role,
    id: typeof role.id === "string" ? Number(role.id) : role.id,
  };
  roles.push(normalizedRole);
  return normalizedRole;
}
export async function deleteRole(id : string | number) {
  const index = roles.findIndex((t) => t.id == id);
  if (index > -1) {
    roles.splice(index, 1);
  }
}

export async function updateRole(role: Organizationdata) {
  const foundRoleIndex = roles.findIndex((t) => t.id == role.id);

  if (foundRoleIndex === -1) {
    throw new Error(`Failed to update role with ${role.id}`);
  }

  roles[foundRoleIndex] = {
    ...role,
    id: typeof role.id === "string" ? Number(role.id) : role.id,
  };
  return roles[foundRoleIndex];
}
