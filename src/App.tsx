import { compareAsc } from "date-fns"
import { useState } from "react"
import { Content, FormContainer, InfoContainer, Typography } from "./components"
import { Timeline } from './components/InfoContainer'


function App() {
  const [gender, setGender] = useState("")
  const [age, setAge] = useState("")
  const [occupation, setOccupation] = useState("")
  const [dateTime, setDateTime] = useState("")
  const [detail, setDetail] = useState("")
  const [timeline, setTimeline] = useState<Timeline[]>([])

  const handleClickAdddButton = () => {
    if (dateTime && detail) {
      const newTimeline = [...timeline]

      const isExistsTimeline = newTimeline.some(t => t.dateTime === dateTime)
      if (!isExistsTimeline) {
        newTimeline.push({ dateTime: dateTime, detail: detail })
      }

      newTimeline.sort((a, b) => {
        const dateTimeA = new Date(a.dateTime)
        const dateTimeB = new Date(b.dateTime)
        return compareAsc(dateTimeA, dateTimeB)
      })

      setTimeline(newTimeline)
      setDateTime("")
      setDetail("")
    }
  }

  const handleClickCloseButton = (date: string) => {
    const newTimeline = timeline.filter((t) => {
      const [d, m, y] = date.split('/')
      return !t.dateTime.includes(`${y}-${m}-${d}`)
    })
    setTimeline(newTimeline)
  }

  return (
    <>
      <Typography.Header>COVID Timeline Genelator</Typography.Header>
      <Content>
        <FormContainer
          gender={gender}
          age={age}
          occupation={occupation}
          dateTime={dateTime}
          detail={detail}
          onGenderChange={gender => setGender(gender)}
          onAgeChange={age => setAge(age)}
          onOccupationChange={occupation => setOccupation(occupation)}
          onDateTimeChange={dateTime => setDateTime(dateTime)}
          onDetailChange={detail => setDetail(detail)}
          onClickAddButton={handleClickAdddButton}
        />
        <InfoContainer
          gender={gender}
          age={age}
          occupation={occupation}
          dateTime={dateTime}
          detail={detail}
          timeline={timeline}
          onClickCloseButton={handleClickCloseButton}

        />
      </Content>
    </>
  );
}

export default App;
