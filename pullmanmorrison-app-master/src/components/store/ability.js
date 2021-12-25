import {Ability,AbilityBuilder} from '@casl/ability'
/**
 * Defines how to detect object's type: https://stalniy.github.io/casl/abilities/2017/07/20/define-abilities.html
 */
function subjectName(item) {
  if (!item || typeof item === 'string') {
    return item
  }

  return item.__type
}
function defineAbilitiesFor(user) {
  return AbilityBuilder.define({ subjectName }, can => {
    switch(user.role) {
      case 'Superuser':
        can(['read'], 'Notification')
        can(['read','update','delete'], 'Recruiter Tag')
        can(['read','update','delete'], 'Skillset')
        can(['read','create','update','delete'], 'Superuser')
        can(['read','create','update','delete'], 'Organisation')
        can(['read','create','update'], 'Organisation-User')
        can('read', 'Company')
        can('read', 'Candidate')
        can('read', 'Job')
        break;
      case 'Admin':
        can(['read'], 'Notification')
        can(['read','update','delete'], 'Recruiter Tag')
        can(['read','update','delete'], 'Skillset')
        can(['read','create','update','delete'], 'User')
        can(['read','create','update','delete'], 'Company')
        can(['read','create','update','delete'], 'Job')
        can(['read','create','update','delete'], 'Candidate')
        break;
      case 'Data Encoder':
        can(['read'], 'Notification')
        can(['read','update','delete'], 'Recruiter Tag')
        can(['read','update','delete'], 'Skillset')
        can(['read','create','update','delete'], 'Company')
        can(['read','create','update','delete'], 'Job')
        can(['read','create','update','delete'], 'Candidate')
        break;
      case 'Recruiter':
        can(['read'], 'Notification')
        can(['read','update','delete'], 'Recruiter Tag')
        can(['read','update','delete'], 'Skillset')
        can(['read','create','update','delete'], 'Company')
        can(['read','create','update','delete'], 'Job')
        can(['read','create','update','delete'], 'Candidate')
        break;
    }
  })
}
//const auth = new KrAuth();
export const ability = new Ability()
export const abilityPlugin = (store) => {
  return store.subscribe((mutation) => {
    switch (mutation.type) {
      case 'profile':
        ability.update(defineAbilitiesFor(mutation.payload).rules)
        break
  }})
}
  