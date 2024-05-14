/**
 * A helper function that filters all the sections based on current users permissions
 * Checks each sections displayData for hideForUsers, showForUsers and hideForGuests
 * Returns an array of sections that the current logged in user has permissions for
 */

// Import helper functions from auth, to get current user, and check if guest
import { getCurrentUser } from '@/utils/Auth';
import { isVisibleToUser } from '@/utils/IsVisibleToUser';

/* Putting it all together, the function to export */
export const checkSectionVisibility = (sections) => {
  const currentUser = getCurrentUser(); // Get current user object
  return sections.filter((currentSection) => isVisibleToUser(
    currentSection.display || [], currentSection.displayData || {}, currentUser,
  ));
};

export default checkSectionVisibility;
