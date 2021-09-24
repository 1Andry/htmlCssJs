'use strict';

/**
 * @param {string[]} countries
 */
export const getDropdown = (countries) => {
    
    return `<option value="netherlands">${countries[0]}</option>
            <option value="japan">${countries[1]}</option>
            <option value="mongolia">${countries[2]}</option>`;
    
};
