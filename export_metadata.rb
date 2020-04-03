#!/usr/bin/ruby

require "date"
require "rmagick"
require 'securerandom'
include Magick

class ExportMetadata
  SOURCE_PATH = "photos/src/"
  EXPORT_PATH = "gatsby-site/content/gallery/"

  def perform
    Dir["#{SOURCE_PATH}*"].each_with_index do |filename, i|
      image = ImageList.new(filename)[0]
      date_string = Date.strptime(Image.read(filename)[0]["exif:DateTimeOriginal"], '%Y:%m:%d').to_s
      uid = SecureRandom.hex(10)
      image.write("#{EXPORT_PATH}#{date_string}-#{uid}.jpg")
    end
  end
end

puts ExportMetadata.new.perform