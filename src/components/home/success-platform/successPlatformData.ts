import type { ComponentType, SVGProps } from 'react'
import { ClassesIcon } from '../../icons/ClassesIcon'
import { CommunitiesIcon } from '../../icons/CommunitiesIcon'
import { CoursesIcon } from '../../icons/CoursesIcon'
import { DigitalProductsIcon } from '../../icons/DigitalProductsIcon'
import { EbooksIcon } from '../../icons/EbooksIcon'
import { MentorshipsIcon } from '../../icons/MentorshipsIcon'
import { SoftwareSaasIcon } from '../../icons/SoftwareSaasIcon'
import { SubscriptionsIcon } from '../../icons/SubscriptionsIcon'

type SuccessPlatformIcon = ComponentType<SVGProps<SVGSVGElement>>

export const successItems: Array<{ translationKey: string; Icon: SuccessPlatformIcon }> = [
  { translationKey: 'digitalProducts', Icon: DigitalProductsIcon },
  { translationKey: 'courses', Icon: CoursesIcon },
  { translationKey: 'mentorships', Icon: MentorshipsIcon },
  { translationKey: 'communities', Icon: CommunitiesIcon },
  { translationKey: 'ebooks', Icon: EbooksIcon },
  { translationKey: 'classes', Icon: ClassesIcon },
  { translationKey: 'subscriptions', Icon: SubscriptionsIcon },
  { translationKey: 'softwareSaas', Icon: SoftwareSaasIcon },
]
