import { filterUp, filterPast, attendanceMax, attendanceLow, capacityMax, upComingStatistics, pastComingStatistics } from "../scripts/modules/functions.js"

const table = document.getElementById("table")

fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((response) => response.json())
  .then((info) => {
        const upcomingEvents = filterUp(info.events, info.currentDate)
        const pastEvents = filterPast(info.events, info.currentDate)
        const maxPercentage = attendanceMax(pastEvents)
        const lowPercentage = attendanceLow(pastEvents)
        const maxCap = capacityMax(info.events)
        const upcomingStatistics = upComingStatistics(upcomingEvents)
        const pastStatistics = pastComingStatistics(pastEvents)

        const eventStatisticsContainer = document.getElementById("eventStatistics")
        eventStatisticsContainer.innerHTML += 
      `<tr>
        <td>"${maxPercentage.name}" with ${((maxPercentage.assistance * 100) / maxPercentage.capacity).toFixed(2)}%</td>
        <td>"${lowPercentage.name}" with ${((lowPercentage.assistance * 100) / lowPercentage.capacity).toFixed(2)}%</td>
        <td>"${maxCap.name}" with ${maxCap.capacity} capacity </td>
      </tr>`
       
        const upcomingStatisticsContainer = document.getElementById("upcomingStatistics")
        const upcomingRows = upcomingStatistics[0].map((category, i) => 
      `<tr>
        <td class="px-2">${category}</td>
        <td>$${upcomingStatistics[1][i]}</td>
        <td>${upcomingStatistics[2][i].toFixed(2)}%</td>
      </tr>`
    ).join("")
        upcomingStatisticsContainer.innerHTML = upcomingRows
        console.log(upcomingRows)

        const pastStatisticsContainer = document.getElementById("pastStatistics")
        const pastRows = pastStatistics[0].map((category, i) => 
      `<tr>
        <td class="px-2">${category}</td>
        <td>$${pastStatistics[1][i]}</td>
        <td>${pastStatistics[2][i].toFixed(2)}%</td>
      </tr>`
    ).join("")
        pastStatisticsContainer.innerHTML = pastRows
    }).catch((err) => {
        console.log(err) 
        table.innerHTML = `<p class="text-center"> Error </p>`
    } 
    )