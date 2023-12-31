import api from './session'


export default {
  getTeam(teamNumber: string) {
    return api.get(`https://api.statbotics.io/v2/team/${teamNumber}`)
  },
  setTeam(body: any) {    
    return api.post(`${import.meta.env.VITE_API_URL}/teams`, { ...body })
  },
  getTeams(competitionId: string | string[] | undefined | null) {
    if(competitionId === null) return api.get(`${import.meta.env.VITE_API_URL}/teams`)
    return api.get(`${import.meta.env.VITE_API_URL}/teams?competitionId=${competitionId}`)
  }
}
