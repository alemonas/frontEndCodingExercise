import influencersDataSample from 'assets/influencerData_500.json'
import influencersDataAll from 'assets/influencerData_bigger.json'

function mapData(data: any) {
  return data.map((influencerData: any) => {
    const {
      firstName,
      lastName,
      gender,
      tags,
      previousPaidExperience,
      skillSet,
    } = influencerData
    const reducer = (previousValue: any, currentValue: any) => {
      return previousValue + currentValue.yearsOfExperience
    }

    const yearsOfExperience = skillSet ? skillSet.reduce(reducer, 0) : 0
    const previousPaidExperienceArray = Object.entries(previousPaidExperience)
      .filter((entry) => {
        const [, entryValue] = entry
        return entryValue === true
      })
      .map((item) => {
        const [key] = item
        return key
      })

    const skillSetArray = skillSet.map((item: any) => item.label)

    return {
      firstName,
      lastName,
      gender,
      tags,
      previousPaidExperience: previousPaidExperienceArray,
      skillSet: skillSetArray,
      yearsOfExperience,
    }
  })
}

export function getSampleItems() {
  const res = mapData(influencersDataSample)
  console.log({res})
  return res
}

export function getAllItems() {
  return mapData(influencersDataAll)
}
