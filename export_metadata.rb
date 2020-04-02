#!/usr/bin/ruby

require "date"
require "rmagick"
include Magick

class ExportMetadata
  SOURCE_PATH = "photos/src/"
  EXPORT_PATH = "gatsby-site/content/gallery/"

  def perform
    Dir["#{SOURCE_PATH}/*"].each do |filename|
      image = ImageList.new(filename)[0]
      date_string = Date.strptime(Image.read(filename)[0]["exif:DateTimeOriginal"], '%Y:%m:%d').to_s
      image.write("#{EXPORT_PATH}photo-#{date_string}.jpg")
    end
  end
end

puts ExportMetadata.new.perform