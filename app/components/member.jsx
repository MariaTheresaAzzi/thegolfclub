import React from 'react'
import Image from 'next/image'
import Memarticle from './memarticle'

const Member = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The different types of memberships</h2>
      <p className="mt-2 text-lg leading-8 text-gray-600">Learn more about The Golf Club memberships.</p>
    </div>
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 pb-12 sm:pb-16 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <Memarticle title="Single Member"
      text="Membership entitles member to full use of the Club."
      text1="Spouse and/or dependants cannot be included under a Single Membership."/>
      <Memarticle title="Family Member"
      text="Membership entitles member to full use of the Club."
      text1="Dependants can be included under a Family Membership, and additional yearly dues are dependent on the child’s age."/>
      <Memarticle title="Overseas Member"
      text="For Lebanese nationals. Requires a valid foreign residency permit."
      text1="Available to those permanently residing outside of Lebanon and who, during the yearly dues period, will use the Club no more than thirty (30) calendar days."
      text3="Entitles member (and family if included on membership) full use of the Club."
      text4="Not applicable to Family Membership when family members reside in Lebanon."/>
      <Memarticle title="Foreign Resident Member"
      text="Available to foreign nationals either residing in Lebanon or on a short-term visit. Entitles member to full use of the Club."
      text1="Annual membership requires a valid Lebanese residency permit and may not be renewed more than three (3) times."
      text3="Monthly membership requires a valid Lebanese entry visa and may not be renewed more than three (3) times during the yearly dues period."
      text4="Foreign Resident Memberships are limited and subject to availability."/>
      <Memarticle title="Company Member"
      text="Available to companies and membership may be transferred from one individual representing the company to another. Transfer applicable at the beginning of every yearly due period."
      text1="Membership entitles two (2) executives and spouses, at any one time, to full use of the Club."
      text3="Dependants can be included under a Company Membership, and additional yearly dues are dependent on the child’s age."/>
      <Memarticle title="Diplomatic Member"
      text="Available to foreign nationals either residing in Lebanon or on a short-term visit. Entitles member to full use of the Club."
      text1="Annual membership requires a valid Lebanese residency permit and may not be renewed more than three (3) times."
      text3="Monthly membership requires a valid Lebanese entry visa and may not be renewed more than three (3) times during the yearly dues period."
      text4="Foreign Resident Memberships are limited and subject to availability."/>
    </div>
    <div className="mx-auto lg:mx-0 pt-12 sm:pt-16 border-t border-gray-200">
        <p className="mt-2 text-lg leading-8 text-gray-600">The Golf Club of Lebanon is a private club that exists for the pleasure, recreation and enjoyment of its members. Guests of members are welcome, subject to guest policies and applicable fees. The purpose of the guest policy and pricing is to balance the interests of the members to bring their own friends and family with the interests of the members to avoid being overcrowded by other members' guests.</p>
        <p className='py-5'>
<b>Who is a Guest :</b>
Everyone entering the Club who is not listed on a membership is considered a guest.
<br></br>
<b>Sign-in:</b>
Guests must be signed in regardless of age, length of stay, intent to use any of the Club’s facilities, or relationship to the member.
The inviting member must accompany any guest entering club facilities.
Guests must be signed in by an adult member or a responsible dependant at least age eighteen (18).
The member should remain on Club premises with the guest for the duration of the guest's stay.
Guests are not able to sign-in other guests.
<br></br>
<b>Length of Stay:</b>
Guest passes are good for the entire day. Guests may leave and return the same day.</p>
    </div>
  </div>
</div>
  )
}

export default Member