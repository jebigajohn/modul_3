// App.tsx
import { useState } from 'react'
import './App.css'

type Scale = 'c' | 'f'

function toCelsius(f: number) {
  return ((f - 32) * 5) / 9
}
function toFahrenheit(c: number) {
  return (c * 9) / 5 + 32
}
function roundTo2(n: number) {
  return Math.round(n * 100) / 100
}
function tryConvert(value: string, convert: (n: number) => number): string {
  const num = parseFloat(value.replace(',', '.')) // erlaubt "37,5"
  if (Number.isNaN(num)) return ''
  return String(roundTo2(convert(num)))
}

type TemperatureInputProps = {
  scale: Scale
  value: string
  onTemperatureChange: (next: string) => void
}

function TemperatureInput({
  scale,
  value,
  onTemperatureChange,
}: TemperatureInputProps) {
  const label =
    scale === 'c' ? 'Temperatur in Celsius' : 'Temperatur in Fahrenheit'
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium">{label}:</label>
      <input
        type="number"
        className="bg-white rounded-2xl text-black p-2"
        value={value}
        onChange={(e) => onTemperatureChange(e.target.value)}
        placeholder={scale === 'c' ? 'z. B. 100' : 'z. B. 212'}
      />
    </div>
  )
}

function BoilingVerdict({ celsius }: { celsius: number }) {
  if (Number.isNaN(celsius)) return null
  return (
    <p className="mt-2">
      {celsius >= 100
        ? '💨 Das Wasser kocht!'
        : '💧 Das Wasser kocht noch nicht.'}
    </p>
  )
}

export default function App() {
  const [temperature, setTemperature] = useState<string>('')
  const [scale, setScale] = useState<Scale>('c')

  const celsius =
    scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
  const fahrenheit =
    scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

  const celsiusNum = parseFloat(celsius)

  return (
    <div className="flex flex-col gap-6">
      <TemperatureInput
        scale="c"
        value={celsius}
        onTemperatureChange={(v) => {
          setScale('c')
          setTemperature(v)
        }}
      />
      <TemperatureInput
        scale="f"
        value={fahrenheit}
        onTemperatureChange={(v) => {
          setScale('f')
          setTemperature(v)
        }}
      />

      <BoilingVerdict celsius={celsiusNum} />
    </div>
  )
}
