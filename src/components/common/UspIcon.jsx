import {
  BarChart3,
  Briefcase,
  ClipboardList,
  MapPin,
  Megaphone,
  Settings2,
  Target,
} from 'lucide-react'

const icons = {
  target: Target,
  ads: Megaphone,
  operations: Settings2,
  report: ClipboardList,
  chart: BarChart3,
  pin: MapPin,
  briefcase: Briefcase,
}

export default function UspIcon({ name, variant = 'default', size }) {
  const Icon = icons[name]
  if (!Icon) return null

  const iconSize = size ?? (variant === 'badge' ? 22 : 24)

  return (
    <span className={`usp-icon${variant === 'badge' ? ' usp-icon--badge' : ''}`}>
      <Icon size={iconSize} strokeWidth={1.75} aria-hidden="true" />
    </span>
  )
}
