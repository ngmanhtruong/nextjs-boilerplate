import {
  GuestbookValidation,
  EditGuestbookValidation,
  DeleteGuestbookValidation,
} from './GuestbookValidation'

describe('GuestbookValidation', () => {
  it('should validate a valid guestbook entry', () => {
    const validGuestbookEntry = {
      username: 'JohnDoe',
      body: 'Hello, world!',
    }

    expect(
      GuestbookValidation.safeParse(validGuestbookEntry).success,
    ).toBeTruthy()
  })

  it('should not validate an invalid guestbook entry', () => {
    const invalidGuestbookEntry = {
      username: '',
      body: 'Hello, world!',
    }

    expect(
      GuestbookValidation.safeParse(invalidGuestbookEntry).success,
    ).toBeFalsy()
  })

  it('should validate a valid edit guestbook entry', () => {
    const validEditGuestbookEntry = {
      id: 1,
      username: 'JohnDoe',
      body: 'Hello, world!',
    }

    expect(
      EditGuestbookValidation.safeParse(validEditGuestbookEntry).success,
    ).toBeTruthy()
  })

  it('should not validate an invalid edit guestbook entry', () => {
    const invalidEditGuestbookEntry = {
      id: '1',
      username: '',
      body: 'Hello, world!',
    }

    expect(
      EditGuestbookValidation.safeParse(invalidEditGuestbookEntry).success,
    ).toBeFalsy()
  })

  it('should validate a valid delete guestbook entry', () => {
    const validDeleteGuestbookEntry = {
      id: 1,
    }

    expect(
      DeleteGuestbookValidation.safeParse(validDeleteGuestbookEntry).success,
    ).toBeTruthy()
  })

  it('should not validate an invalid delete guestbook entry', () => {
    const invalidDeleteGuestbookEntry = {
      id: 'abcd',
    }

    expect(
      DeleteGuestbookValidation.safeParse(invalidDeleteGuestbookEntry).success,
    ).toBeFalsy()
  })
})
