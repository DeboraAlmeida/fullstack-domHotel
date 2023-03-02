// Arquivo criado: 19/01/2023 às 15:52
import React, { useEffect, useState } from "react"
import getMouthReserves from "../../../services/getMouthReserves"
import getTotalReserves from "../../../services/getTotalReserves"
import getTotalUsers from "../../../services/getTotalUsers"
import getTotalWorkers from "../../../services/getTotalWorkers"
import BoxElements from "../../atoms/BoxElements"
import ContainerLayoutAdmin from "../../atoms/ContainerLayoutAdmin"
import PrincipalTitle from "../../atoms/PrincipalTitle"
import SubTitle from "../../atoms/SubTitle"
import * as S from "./styles"


const HomeAdmin = () => {
  const [activeUsers, setActiveUsers] = useState(0)
  const [activeReserves, setActiveReserves] = useState(0)
  const [activeWorkers, setActiveWorkers] = useState(0)
  const [mouthReserves, setMouthReserves] = useState(0)
  useEffect(() => {
    const getActiveUsers = async () => {
      const result = await getTotalUsers()
      setActiveUsers(result)
    }
    const getActiveReserves = async () => {
      const result = await getTotalReserves()
      setActiveReserves(result)
    }
    const getActiveWorkers = async () => {
      const result = await getTotalWorkers()
      setActiveWorkers(result)
    }
    const getMouthReservesNumber = async () => {
      const result = await getMouthReserves()
      setMouthReserves(result)
    }
    getActiveWorkers()
    getActiveUsers()
    getActiveReserves()
    getMouthReservesNumber()
  },[])

 


  return (
    <>
    <PrincipalTitle>DOM Hotel</PrincipalTitle>
    <S.BoxAdminHome>
      <ContainerLayoutAdmin>
        <BoxElements>
          <SubTitle>{ activeUsers }</SubTitle> 
          <p>clientes ativos</p>
        </BoxElements>
        <BoxElements>
          <SubTitle>{ activeReserves }</SubTitle> 
          <p>reservas ativas</p>
        </BoxElements>
        <BoxElements>
          <SubTitle>{ activeWorkers }</SubTitle> 
          <p>funcionários ativos</p>
        </BoxElements>
        <BoxElements>
          <SubTitle>{ mouthReserves }</SubTitle> 
          <p>reservas para este mês</p>
        </BoxElements>
      </ContainerLayoutAdmin>
    </S.BoxAdminHome>
      
    </>
  )
}

export default HomeAdmin

