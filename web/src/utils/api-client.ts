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

    return {
      firstName,
      lastName,
      gender,
      tags,
      previousPaidExperience,
      skillSet,
      yearsOfExperience,
    }
  })
}

export function getSampleItems() {
  return mapData(influencersDataSample)
}

export function getAllItems() {
  return mapData(influencersDataAll)
}
